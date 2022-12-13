// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  API_KEY:"706678183a3adde83b3c45b0eeb7cf3d",
  API_URL:"https://api.openweathermap.org/data/2.5/",
  
  IS_LOGGED: false,
  IS_REGISTERED: false,
  NAME: "",
  IDENTIFIER: "",
  ID_USER: "",


  firebaseConfig: {
    apiKey: "",
    authDomain: "hascandy1.firebaseapp.com",
    projectId: "hascandy1",
    storageBucket: "hascandy1.appspot.com",
    messagingSenderId: "420601255274",
    appId: "1:420601255274:web:608f157224f76f7fbd0113"
  }
  

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
