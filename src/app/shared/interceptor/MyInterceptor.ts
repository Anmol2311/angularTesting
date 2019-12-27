import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req,next) {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        })
        return next.handle(req);
    }
}