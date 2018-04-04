import './polyfills';
import '../assets/i18n/it.json';
import '../assets/i18n/en.json';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from '@angular/core';

import {AppModule} from "./appModule";
import {Configuration,Environment} from "./models/config.model";

declare var _CONF: Configuration;

if(_CONF.endpoint == Environment.PROD){
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => console.log(`AppModule loaded...`))
    .catch((error)  => console.error(`AppModule not loaded :( ${error}`));