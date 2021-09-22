import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceXService } from '../services/space-x.service';
import { Launch } from '../shared/model/launch';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
})
export class LaunchesListComponent implements OnInit {
  launches$!: Observable<Launch[]>;
  constructor(private readonly spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.launches$ = this.spaceXService.getLaunchesList();
  }

  trackByIdx(i: number) {
    return i;
  }
}
