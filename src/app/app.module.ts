import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MyhighlightDirective} from './myhighlight.directive';
import {ChildComponent} from './child/child.component';
import {NodataComponent} from './nodata/nodata.component';
import {InfiniteScrollDirective} from './infinite-scroll.directive';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {DocsComponent} from './docs/docs.component';
import {CardComponent} from './docs/card/card.component';
import {HomeComponent} from './home/home.component';
import {appRoutes} from './app.routes';
import {ModalComponent} from './home/modal/modal.component';
import {CloseOutsideDirective} from './home/close-outside.directive';
import {DagreComponent} from './dagre/dagre.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TreeComponent} from './tree/tree.component';
import {JsplumbComponent} from './jsplumb/jsplumb.component';
import {AlertComponent} from './dynamic/exe-alert.component';
import {SharedModule} from './shared/shared.module';
import {SocketIoComponent} from './socket-io/socket-io.component';
import {SasstestComponent} from './sasstest/sasstest.component';
import {DocDetailComponent} from './doc-detail/doc-detail.component';
import {LinkDirective} from './link.directive';
import {SimplyScrollComponent} from './simply-scroll/simply-scroll.component';
import {ModalModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WallpaperComponent} from './wallpaper/wallpaper.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';
import {CounterComponent} from './counter/counter.component';
import {TokenInterceptor} from './core/token-interceptor';
import {AuthService} from './core/auth-service';
import {LifeComponent} from './life/life.component';
import {LifeChildrenComponent} from './life/life-children.component';
import {FormComponent} from './form/form.component';
import {AgeInputerComponent} from './form/age-inputer.component';

@NgModule({
    declarations: [
        AppComponent,
        MyhighlightDirective,
        InfiniteScrollDirective,
        ChildComponent,
        NodataComponent,
        HeaderComponent,
        FooterComponent,
        DocsComponent,
        CardComponent,
        HomeComponent,
        ModalComponent,
        CloseOutsideDirective,
        DagreComponent,
        DynamicComponent,
        LoginComponent,
        TreeComponent,
        JsplumbComponent,
        AlertComponent,
        SocketIoComponent,
        SasstestComponent,
        DocDetailComponent,
        LinkDirective,
        SimplyScrollComponent,
        WallpaperComponent,
        CounterComponent,
        LifeComponent,
        LifeChildrenComponent,
        FormComponent,
        AgeInputerComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({count: counterReducer}),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        ModalModule.forRoot()
    ],
    providers: [
        LoginService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [AlertComponent],
})
export class AppModule {

    constructor() {
        // localStorage.setItem('token', '11111');
    }
}
