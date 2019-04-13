import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth-service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.getToken()}`
                }
            });
        }
        return next.handle(request).do((event) => {
                return event;
            },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        // this.authService.removeToken();
                        // location.reload();
                    }
                }
                return Observable.throw(err);
            }
        );
    }
}
