import './polyfills';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./appModule";

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => console.log(`AppModule loaded..`))
    .catch((error)  => console.error(`AppModule not loaded :( ${error}`));