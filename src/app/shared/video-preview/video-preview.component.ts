import { Component, OnChanges, SimpleChanges } from '@angular/core'
import { CommonService } from '@core/services/common.service'
import { AudioPreviewComponent } from '@shared/audio-preview/audio-preview.component'
import { OverlayPanelRef } from '@shared/overlay-panel/overlay-panel-ref'

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent extends AudioPreviewComponent implements OnChanges {
  constructor(
    public overlayRef: OverlayPanelRef,
    public commonService: CommonService
  ) {
    super(overlayRef, commonService)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['document']) {
      this.getDocument()
    }
  }
}
