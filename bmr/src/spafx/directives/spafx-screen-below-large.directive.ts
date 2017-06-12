import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxJs/Subscription';
import { SpaFxScreenService } from '../services/spafx-screen.service';

@Directive ({ selector: '[screenBelowLarge]'})
export class SpaFxScreenBelowLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef, 
              private template: TemplateRef<Object>,
              private screenService: SpaFxScreenService) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
  }

  @Input()
  set screenLarge(condition) {
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);

    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    // just trigger the setter
    this.screenLarge = false;
  }
}