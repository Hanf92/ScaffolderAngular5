import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

import './approot.component.scss';
import {UtilsService} from "../../providers/utils.service";

@Component({
    selector: 'approot-component',
    templateUrl: 'approot.component.html'
})
export class ApprootComponent {

    constructor(private translate: TranslateService, private utilsService: UtilsService) {
        this.translate.addLangs(["it", "en"]);
        this.utilsService.isBrowserLanguageIT() ? this.translate.setDefaultLang('it') : this.translate.setDefaultLang('en')
    }

}