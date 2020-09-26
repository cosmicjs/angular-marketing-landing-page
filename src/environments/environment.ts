// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  COSMIC_BUCKET: '',
  COSMIC_READ_KEY: '',
  COSMIC_WRITE_KEY: '',
  COSMIC_API_URL: 'https://api.cosmicjs.com/v1/',
  COSMIC_CAMPAIGN_NAME: '',
  runtimeConfigUrl: 'https://heuristic-minsky-ea8416.netlify.app/.netlify/functions/get-environment-variables'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
