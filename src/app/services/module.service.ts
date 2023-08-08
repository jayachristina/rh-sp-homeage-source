import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable()
export class ModuleService {

  http: HttpClient;
  private handleError: HandleError;

  moduleListUrl = '../assets/patterns-list.json';

  
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.http = http;
    this.handleError = httpErrorHandler.createHandleError('ModuleListService');
  }

  fetchModuleList(): Observable<any> {
    return this.http.get<any>(this.moduleListUrl)
      .pipe(
        catchError(this.handleError('fetchModuleList', ''))
      );
  }

  

}
