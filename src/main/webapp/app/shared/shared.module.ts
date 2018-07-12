import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MsGatewaySharedLibsModule, MsGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MsGatewaySharedLibsModule, MsGatewaySharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [MsGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsGatewaySharedModule {}
