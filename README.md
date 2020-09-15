# Marketing Landing Page with Cosmic JS

This application is a simple landing page that allows an organization to build a mailing list of users and in exchange deliver some content to the user via a download.
The application owner sets up a campaign in Cosmic JS which feeds details in the application. When a user visits the sight they will receive information about the campaign and
be presented with a form to sign up for the offered content. The user's information is saved in a Cosmic JS object and attached to the campaign object. Once the information is submitted, the offered content stored in Cosmic is
downloaded to the user's machine.

## Cosmic JS Setup

[![Powered by Cosmic](https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg)](https://app.cosmicjs.com/add-bucket?import_bucket=5f52a4e110dbb60008716d5f)

More information to come.

## Application Configuration

Configuration for the application is currently handled in a config.ts file located in the config folder. The application owner needs to supply the following information for the application to properly connect with their Cosmic bucket.

- Bucket Slug
- Slug of Campaign Name
- Bucket read_key
- Bucket write_key
