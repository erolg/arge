import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    auth(username: string, password: string) {

      return new Promise((resolve, reject) => {
        let body = { username: username, password: password };
      
        this.http.post('http://localhost:2999/user/login', body)
          .subscribe(
            response => {
              var status = (response['_body'] === 'true')

              if (status)
                resolve(true);
              else
                reject(false);
            },
            error => {
              reject(false);
            }
          );
      });
    }

}