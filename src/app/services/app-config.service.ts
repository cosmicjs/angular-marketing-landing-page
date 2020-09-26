import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    config: any;
    configSubject$: any;
    constructor(private http: HttpClient) {}

    public loadConfig() {
        return this.http.get(environment.runtimeConfigUrl)
                        .toPromise()
                        .then((config:any) => {
                            this.config = config;
                            this.configSubject$.next(this.config);
                        })
                        .catch((err:any) => {
                            console.error(err);
                        })
    }

    public getConfig() {
        return this.config;
    }
}