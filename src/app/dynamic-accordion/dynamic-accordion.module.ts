/**
 * @description
 * This accordion is used or going to use more than one module. so its converted into module
 */
import { NgModule } from "@angular/core";
import { DynamicAccordionComponent } from "./dynamic-accordion.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { CalendarModule } from "primeng/calendar";

@NgModule({
  imports: [CommonModule, CalendarModule, FormsModule],
  declarations: [DynamicAccordionComponent],
  exports: [DynamicAccordionComponent]
})
export class DynamicAccordionModule {}
