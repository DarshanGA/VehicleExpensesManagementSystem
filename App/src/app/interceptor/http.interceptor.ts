import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    const toastr = inject(ToastrService);
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {

            if (error.status === 0) {

                toastr.error("Service is not reachable, please try again later!", "Network Error");
            }
            else if (error.status > 400)
                console.log("error is 400 code series.");
            else{

                toastr.error("An un-known error occured!", "Unknown Error");
            }
            return throwError(() => error);
        })
    );
}