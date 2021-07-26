import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Wiki } from './wiki.model';
import { WikiPageParam } from '../pageParam.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class WikiService {

    constructor(private http: HttpClient) {

    }
    readonly _baseUrl = "https://localhost:44389/Wiki";

    create(wiki: Wiki) : Observable<Wiki> {
       return this.http.post<Wiki>(this._baseUrl, wiki);
    }
    update(wiki: Wiki) : Observable<Wiki>{
        return this.http.put<Wiki>(this._baseUrl, wiki);
    }
    delete(id: number) : Observable<boolean> {
        return this.http.get<boolean>(`${this._baseUrl}/delete/${id}`);
    }
    getById(id: number) : Observable<Wiki>{
        return this.http.get<Wiki>(`${this._baseUrl}/${id}`);
    }
    getList(param: WikiPageParam): Observable<Wiki[]> {
        return this.http.post<Wiki[]>(`${this._baseUrl}/getList`, param);
    }
}
