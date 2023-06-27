import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ShotenPipe } from './pipes/shoten.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    ShotenPipe,
    SearchFilterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
