# Backbone Boilerplate for simple Hiring App

In this app we show list of jobs and their descriptions. User can send request for one that liked.

## Before start

** NPM version should be at least 5.8.0  **

You will need to adjust boilerplate for yourself:

**/manifest.json**

  "start_url": url, - define url, where your FE instance will be hosted
  "scope": url,

**/index.html**

    <link rel="manifest" href="url/manifest.json">
    <meta name="msapplication-starturl" content="url/index.html">

**/app/data/demo.json**

    - data - change data if needed.

**/app/collection.item-list.js**

    - link to data

**app/utilities/router.js**

    - data manipulation scenarios
    - route_deliver > $ajax.url -  backend url. Should lead to backend instance, which will handle post-request.

## What's next

You can edit and run this project locally:

    clone repository

    npm install

    npm start

You can upload your code to AWS servers and run it remotely.