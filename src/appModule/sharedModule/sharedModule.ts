import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SpinnerLoadingComponent} from "./components/spinnerLoadingComponent/spinnerLoading.component";

@NgModule({
  declarations: [SpinnerLoadingComponent],
  imports: [CommonModule],
  exports:[SpinnerLoadingComponent]
})

export class SharedModule { }