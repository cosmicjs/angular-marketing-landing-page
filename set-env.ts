
const { writeFile } = require('fs');
const { argv } = require('yargs');
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
// Configure Angular `environment.ts` file path
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;// Load node modules
const colors = require('colors');
require('dotenv').config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
   cosmicAPI_URL: '${process.env.COSMIC_API_URL}',
   bucketSlug: '${process.env.COSMIC_BUCKET}',
   readKey: '${process.env.COSMIC_READ_KEY}',
   writeKey: '${process.env.COSMIC_WRITE_KEY}',
   campaignName: '${process.env.COSMIC_CAMPAIGN_NAME}',
   production: '${process.env.PRODUCTION}'
};
`;
console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});