import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { MyUrcapIdPrgComponent } from './components/my-urcap-id-prg/my-urcap-id-prg.component';
import { MyUrcapIdAppComponent } from './components/my-urcap-id-app/my-urcap-id-app.component';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { PATH } from '../generated/contribution-constants';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const httpLoaderFactory = (http: HttpBackend) =>
    new MultiTranslateHttpLoader(http, [
        { prefix: PATH + '/assets/i18n/', suffix: '.json' },
        { prefix: './ui/assets/i18n/', suffix: '.json' },
    ]);

@NgModule({
    declarations: [
        MyUrcapIdPrgComponent,
         MyUrcapIdAppComponent
   ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UIAngularComponentsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpBackend] },
            useDefaultLang: false,
        })
    ],
    providers: [],
})

export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const myurcapidprgComponent = createCustomElement(MyUrcapIdPrgComponent, {injector: this.injector});
        customElements.define('my-company-id-my-urcap-id-my-urcap-id-prg', myurcapidprgComponent);
        const myurcapidappComponent = createCustomElement(MyUrcapIdAppComponent, {injector: this.injector});
        customElements.define('my-company-id-my-urcap-id-my-urcap-id-app', myurcapidappComponent);
    }

    // This function is never called, because we don't want to actually use the workers, just tell webpack about them
    registerWorkersWithWebPack() {
        new Worker(new URL('./components/my-urcap-id-app/my-urcap-id-app.behavior.worker.ts'
            /* webpackChunkName: "my-urcap-id-app.worker" */, import.meta.url), {
            name: 'my-urcap-id-app',
            type: 'module'
        });
        new Worker(new URL('./components/my-urcap-id-prg/my-urcap-id-prg.behavior.worker.ts'
            /* webpackChunkName: "my-urcap-id-prg.worker" */, import.meta.url), {
            name: 'my-urcap-id-prg',
            type: 'module'
        });
    }
}

