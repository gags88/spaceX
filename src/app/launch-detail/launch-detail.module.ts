import { NgModule } from '@angular/core';

import { LaunchDetailRoutingModule } from './launch-detail-routing.module';
import { LaunchDetailComponent } from './launch-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LaunchDetailComponent],
  imports: [SharedModule, LaunchDetailRoutingModule],
})
export class LaunchDetailModule {}
