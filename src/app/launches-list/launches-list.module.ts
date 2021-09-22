import { NgModule } from '@angular/core';

import { LaunchesListRoutingModule } from './launches-list-routing.module';
import { LaunchesListComponent } from './launches-list.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [LaunchesListComponent],
  imports: [SharedModule, ScrollingModule, LaunchesListRoutingModule],
})
export class LaunchesListModule {}
