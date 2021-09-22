import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXService } from '../services/space-x.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, LoaderComponent],
  providers: [SpaceXService],
})
export class SharedModule {}
