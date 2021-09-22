import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceXService } from '../services/space-x.service';
import { Launch } from '../shared/model/launch';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  launch$!: Observable<Launch>;
  constructor(
    private readonly spaceXService: SpaceXService,
    private readonly activateRoute: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getLaunchDetail();
  }

  getLaunchDetail(): void {
    this.launch$ = this.spaceXService.getLaunchDetail(
      this.activateRoute.snapshot.params.id
    );
  }

  getSafeEmbedUrl(video_code: string): SafeResourceUrl {
    video_code = video_code.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(video_code);
  }
}
