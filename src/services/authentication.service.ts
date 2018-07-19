// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
 
// @Injectable()
// export class AuthenticationService {
//     constructor(private http: HttpClient) { }
 
//     login1(username: string, password: string) {
//         return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
//             .pipe(map(user => {
//                 // login successful if there's a jwt token in the response
//                 if (user && user.token) {
//                     // store user details and jwt token in local storage to keep user logged in between page refreshes
//                     localStorage.setItem('currentUser', JSON.stringify(user));
//                 }
 
//                 return user;
//             }));
//     }
//     login(userName: string) {

//         return this.httpService.get('users/user/' + userName)
//           .map((response: Response) => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//       }
 
//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//     }
// }