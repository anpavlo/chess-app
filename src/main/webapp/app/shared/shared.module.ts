import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChessAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ChessAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ChessAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChessAppSharedModule {
  static forRoot() {
    return {
      ngModule: ChessAppSharedModule
    };
  }
}
