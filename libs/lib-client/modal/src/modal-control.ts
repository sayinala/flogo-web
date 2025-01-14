import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class ModalControl {
  private resultSubscriber: Subject<any>;
  result: Observable<any>;
  detach: Observable<any>;

  constructor(private overlayRef: OverlayRef) {
    this.resultSubscriber = new Subject<any>();
    this.result = this.resultSubscriber.asObservable();
    this.detach = this.overlayRef.detachments();
  }

  public close(result?: any) {
    this.overlayRef.dispose();
    this.resultSubscriber.next(result);
    this.resultSubscriber.complete();
  }
}
