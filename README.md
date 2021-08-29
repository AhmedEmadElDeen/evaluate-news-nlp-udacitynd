# evaluate-news-nlp

## Table of Contents

- [evaluate-news-nlp](#evaluate-news-nlp)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Build Tools](#build-tools)
  - [Installing](#installing)
  - [Usage](#usage)
  - [Author](#author)
  - [starter-template-app](#starter-template-app)

## About

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on the Internet. On submission of a URL, the web page will display sentiment analysis provided by Meaningcloud API, based on the contents of the article.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- Meaningcloud API
- Jest
- Workbox

## Installing

Use the following commands to install all necessary packages provided in `packages.json`:

```bash
npm install
or
yarn install
```

Create API credentials on [MeaningCloud.com](https://docs.aylien.com/textapi/endpoints/#api-endpoints), then insert API KEY into the `.env` file.

Set up webpack config files for development and production environments using the following commands:

```bash
npm run build-dev
npm run build-prod
```

Initiate an instance of the express server using this command:

```bash
npm run start
or
yarn start
```

## Usage

Navigate to <http://localhost:8080/> in your browser.

To use the web app, enter a URL in the input field and press the **Submit** button. Sentiment results will be displayed in the space below. If a URL is invalid, the user will see an error message. The app is fully responsive.

## Author

Code is created by [Ahmed Emad ElDeen](https://github.com/AhmedEmadElDeen), using starter code by Udacity for Udacity's front-end advanced nanodegree program.

## starter-template-app

Forked from [Udacity's evaluate-news-nlp starter template repository](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp)
