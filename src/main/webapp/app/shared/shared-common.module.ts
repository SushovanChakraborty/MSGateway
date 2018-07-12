import { NgModule } from '@angular/core';

import { MsGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MsGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MsGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MsGatewaySharedCommonModule {}
