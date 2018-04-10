import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

import {SpinnerLoadingComponent} from "./components/spinnerLoadingComponent/spinner-loading.component";

@NgModule({
  declarations: [SpinnerLoadingComponent],
  imports: [CommonModule, TranslateModule],
  exports:[SpinnerLoadingComponent, CommonModule, TranslateModule]
})

export class SharedModule { }