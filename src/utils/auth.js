// src/utils/auth.js
import auth0 from 'auth0-js';

const AUTH0_DOMAIN = 'alex-love.auth0.com.auth0.com';
const AUTH0_CLIENT_ID = 'Y4Xvp1YSp42ML1f47AWRoUZnDru2VRYQ';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: 'http://localhost:8000/callback',
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  login() {
    this.auth0.authorize();
  }
}