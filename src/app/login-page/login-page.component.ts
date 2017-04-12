import { Component, Input } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public afService: AF, private router: Router) {}

  // var clientId = "820792854342-g4u8m82tgnqk3ebq7inhef0mibeq5p52.apps.googleusercontent.com";
  // var apiKey = 'CfAnW4JEb7BGsYYujdu7SpRA';
  // var scopes = "https://www.googleapis.com/auth/calendar.readonly";
  // declare var gapi:any;



  login() {
    // return this.proceedAuthentication()
    //  .then(() => this.initializeGoogleCalendarAPI())git


    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['index/', data.uid]);
    })
  }

  // private proceedAuthentication(immediate:boolean){
	// 	return new Promise((resolve, reject) => {
	// 		gapi.client.setApiKey(CallService.apiKey);
	// 		var authorisationRequestData =
	// 		{
	// 			'client_id': CallService.clientId,
	// 			'scope': CallService.scopes,
	// 			'immediate': immediate
	// 		}
	// 		gapi.auth.authorize(authorisationRequestData,
	// 			(authenticationResult) => {
	// 				if(authenticationResult && !authenticationResult.error){
	// 					this.isAuthenticated = true
	// 					this.setUserData('unknown', '');
	// 					resolve()
	// 				}
	// 				else {
	// 					this.isAuthenticated = false
	// 					this.setUserData('','');
	// 					reject();
	// 				}
	// 			}
	// 			);
	// 		});
	// }
  // private initializeGoogleCalendarAPI(){
	// 	return new Promise((resolve, reject) => {
	// 		resolve(gapi.client.load('calendar', 'v3'));
	// 	});
	// }
}
