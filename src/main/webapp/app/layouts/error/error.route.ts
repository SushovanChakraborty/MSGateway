import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'MSGateway'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'MSGateway',
            error403: true
        }
    }
];
