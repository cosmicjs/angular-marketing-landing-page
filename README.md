# Marketing Landing Page with Cosmic

This application is a simple landing page that allows an organization to build a mailing list of users and in exchange deliver some content to the user via a download.

The application owner sets up a campaign in Cosmic which feeds details in the application. When a user visits the sight they will receive information about the campaign and be presented with a form to sign up for the offered content. The user's information is saved in a Cosmic object and attached to the campaign object. Once the information is submitted, the offered content stored in Cosmic is
downloaded to the user's machine.

## Cosmic Setup

[![Powered by Cosmic](https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg)](https://app.cosmicjs.com/add-bucket?import_bucket=5f52a4e110dbb60008716d5f)

More information to come.

## Application Configuration

Locally, the application requires a .env file holding the environment variables needed for the application to communicate with the Cosmic API. When moving to deployment, the application will pull the values from the server's environment variables and create an environment file for the application so it will have access to these values. The list of what variables are needed are the following:

  * COSMIC_BUCKET=\<Cosmic Bucket Slug>
  * COSMIC_READ_KEY=\<Your Read Key>
  * COSMIC_WRITE_KEY=\<Your Write Key>
  * COSMIC_API_URL=https://api.cosmicjs.com/v1/
  * COSMIC_CAMPAIGN_NAME=\<Campaign Object Slug>
