# Angular Marketing Landing Page
![Screenshot](https://imgix.cosmicjs.com/33f05e90-0749-11eb-ae60-6dcb8c7018a0-landing-page-3.png?w=1200&auto=format)

This application is a simple landing page built using [Angular](https://angular.io/) and the [Cosmic Headless CMS](https://www.cosmicjs.com/) that allows an organization to build a mailing list of users and in exchange deliver some premium content to the user via a download.

## How it works
1. The application owner sets up a campaign up in [Cosmic](https://www.cosmicjs.com/) which feeds details into the landing page.
2. When the user visits the landing page they will receive information about the campaign and be presented with a form to sign up for the offered content.
3. After the user's information is submitted, it is saved in a Cosmic Object and attached to the campaign Object.
4. The user then receives the premium content downloaded to their machine.

## Cosmic Setup
One click install to a new Bucket with the following button:

[![Powered by Cosmic](https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg)](https://app.cosmicjs.com/add-bucket?import_bucket=5f52a4e110dbb60008716d5f)

You can also view more details, and select this app in the [Cosmic App Marketplace](https://www.cosmicjs.com/apps/angular-marketing-landing-page).

## Application Configuration

Locally, the application requires a `.env` file holding the environment variables needed for the application to communicate with the Cosmic API. When moving to deployment, the application will pull the values from the server's environment variables and create an environment file for the application so it will have access to these values. The list of what variables are needed are the following (find these in your Cosmic dashboard located in [Bucket Basic Settings > API Access](https://app.cosmicjs.com/login)):

```bash
# .env
COSMIC_BUCKET=<your-bucket-slug>
COSMIC_READ_KEY=<your-bucket-read-key>
COSMIC_WRITE_KEY=<your-bucket-write-key>
COSMIC_API_URL=https://api.cosmicjs.com/v1/
COSMIC_CAMPAIGN_NAME=<campaign-object-slug> # find this in the Campaigns > My First Campaign in the Cosmic Dashboard
```
## Getting Started
Clone this repo, install and run.
```
git clone https://github.com/cosmicjs/angular-marketing-landing-page
cd angular-marketing-landing-page
npm i
npm start
```
Go to your local running instance at https://localhost:4200.

## Deploy to Netlify
Deploy to Netlify using the following button. You will need to add your Bucket slug and Bucket read key as environment variables. Find these in <i>Basic Settings &gt; API Access.</i>

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/cosmicjs/angular-marketing-landing-page" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/787493f0-c064-11ea-9a05-6f8a16b0b14c-deploy-button.svg" style="width: 150px;"></a>
