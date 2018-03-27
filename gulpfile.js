const gulp = require('gulp');
const yargs = require('yargs');
const path = require('path');
const through = require('through2');

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const merge = require('gulp-merge');
const replace = require('gulp-replace');

(function () {

        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };

        String.prototype.pathMinusOneSubDir = function () {
            return this.split('/').slice(0,-1).join('/');
        }
    }
)(this);

let modulePath;
//console arguments
const argv = yargs.argv;

function parsePath() {
    return through.obj(function (file, enc, cb) {
        modulePath = path.resolve(file.path);
        console.log('modulePath ',modulePath);
        cb();
    });
}

/**
 * Define as arguments
 * ModuleName as --name (represent folder and file name)
 * Path as --path (represent path to insert module)
 */

gulp.task('module', (cb) => {
    const moduleName = argv.name;
const path = argv.path;
if(!moduleName || moduleName === undefined || moduleName == null) {
    throw new Error('Module name can\'t be null');
}
if(!path || path === undefined || path == null) {
    throw new Error('Path can\'t be null');
}

const templateData = {
    moduleName: moduleName
};
const options = {
    helpers : {
        capitalize : function(str){
            return str.capitalize();
        }
    }
};

return gulp.src('templates/module.hbs')
    .pipe(handlebars(templateData,options))
    .pipe(rename(moduleName+'Module.ts'))
    .pipe(gulp.dest(path+'/'+moduleName+'Module'));

});
/**
 * Define as argument:
 * ModuleName as --module (name folder example appModule),
 * ComponentName as --alias (name component example Fake),
 */
gulp.task('component',['searchPath'], (cb) => {
    let moduleName = argv.module;
const componentName = argv.alias;

if(!componentName || componentName === undefined || componentName == null){
    throw new Error('Component Name can\'t be null');
}
if(!moduleName || moduleName === undefined || moduleName == null) {
    throw new Error('Module Name can\'t be null');
}

const templateData = {
    componentName: componentName
};
const options = {
    helpers : {
        capitalize : function(str){
            return str.capitalize();
        }
    }
};

console.log('sourcePath test ', modulePath);

const createComponent =
    gulp.src('templates/component.hbs')
        .pipe(handlebars(templateData,options))
        .pipe(rename(`${componentName}.component.ts`))
        .pipe(gulp.dest(`${modulePath}/components/${componentName}Component`));
const createHtml =
    gulp.src('templates/template.hbs')
        .pipe(handlebars(templateData,options))
        .pipe(rename(`${componentName}.component.html`))
        .pipe(gulp.dest(`${modulePath}/components/${componentName}Component`));
const createSass =
    gulp.src('templates/style.hbs')
        .pipe(handlebars(templateData,options))
        .pipe(rename(`${componentName}.component.scss`))
        .pipe(gulp.dest(`${modulePath}/components/${componentName}Component`));

//TODO fix path

//const addAndImportComponentInModule =
//  gulp.src(`src/**/*${moduleName}/${moduleName}.ts`)
//    .pipe(replace('/*@addComponent*/', function () {
//      return `${componentName.capitalize()}Component, /*@addComponent*/`;
//    }))
//    .pipe(replace('/*@addImport*/', `import {${componentName.capitalize()}Component} from './${componentName}Component/${componentName}.component' \n/*@addImport*/`))
//   .pipe(gulp.dest(`.${modulePathMinusOneSubDir}`));

return merge(createComponent, createHtml, createSass);

});

gulp.task('searchPath', ()=> {
    let moduleName = argv.module;
console.log('moduleName ', moduleName);
return gulp.src(`src/**/*${moduleName}/`)
    .pipe(parsePath())
});