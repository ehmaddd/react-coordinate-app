# Redux-Coordinate-Fetch-App
In this project, I have created a SPA which fetches all the provinces of Pakistan using API from AccWeather and displays them on the first page alongwith the Level fetched from the same website. Moreover, a search bar makes it easy to search the province. When the user clicks on a specific province, some cities of the province are displayed and their Coordinates (Lat and Lon), all fetched from AccuWeather API.

<h1>Redux Coordinate Fetch App</h1>

<!-- TABLE OF CONTENTS -->
# 📗 Table of Contents

- [Redux Coordinate Fetch App](#redux-coordinate-fetch)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Redux Coordinates' Fetch](#-redux-coordinates-fetch)
    - [How to build the "Redux Coordinates Fetch application?](#how-to-build-redux-coordinates-fetch-application)
      - [Provinces](#province)
      - [Cities](#city)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Tools i have used for this project ](#tools-i-have-used-for-this-project-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->
# 📖 Redux Coordinate Fetch App<a name="about-project"></a>
Redux Coordinate Fetch App is a website working with the real live data from AccuWeather API to build a web application for the use of general public that provide general info services. This application will allow users to view the coordinates of their required province.

<!-- > Describe your project in 1 or 2 sentences. -->
### How to build the "Coordinates Fetch" application?
Coordinates Fetch Application consists of two pages. First page displays the provinces of Pakistan and enables the user to fetch according to name, and the second page is displayed after clicking the required province and shows the cities and their coordinates.

#### Home Page
The Home Page fetches the provinces from the API according to the provided country code and their images are taken and attached separately.

#### Coordinates Page
This Page displays the names and coordinates of some cities after fetching the coordinates from AccuWeather API.


### Projects list
- Config & Basic Project Setup: 
  * Create React App
  * Install [React Redux](https://react-redux.js.org/), [Redux Logger](https://www.npmjs.com/package/redux-logger) and [React Router](https://reactrouter.com/web/guides/quick-start).
  * Create routes and view components: Home, Coordinates
    * Use <Link /> for the page navigation links
  * Create directories for all Redux state slice files: Home, Coordinates

- Redux: Fetch data and update Redux store
  * Upon first render fetch data from the AccuWeather endpoints:
    * Provinces and their Levels
    * Coordinates
  * Once the data are fetched, dispatch an action to store the selected data in Redux store

- Render UI:lists
  * - Use `useSelector()` Redux Hook to select the state slices and render lists of rockets and missions in corresponding routes. i.e.:
  * Style the whole application "by hand"

  
- Redux: Write actions and reducers for displaying and searching provinces and cities
  * When a user loads the page, the provinces are automatically fetched and rendered alongwith their Level which is a numeric value.

  * Place all the logics in the reducer. In the React view file, should only dispatch the action with the correct data.
  * Create a reducer and action dispatcher Search Option. The logic here is to create a new filter slot in the store, and when the data is received, copy it immediately in the filter slot. Afterwards, when we have to filter the real data, pick the copy from original data and filter it and later on if original data is required, make its copy and it will be available.

- Technical set up\*\*
  * Set up the repository on GitHub and use Gitflow.
  * Set up React and Redux.
  * Set up testing libraries(React Testing Library and Jest).
  * Do not preserve user data.
  
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<!-- > Describe the tech stack and include only the relevant sections that apply to your project. -->
<details>
  <summary>Client Side / Front-End</summary>
  <ul>
    <li><a href="https://www.w3.org/html/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://create-react-app.dev/">React</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
  </ul>
</details>

<details>
  <summary>Server Side / Back-End</summary>
  <ul>
    <li><a href="https://www.json.org/json-en.html">JSON</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <!-- <li><a href="https://www.npmjs.com/package/big.js">big.js</a></li> -->
    <!-- <li><a href="https://api-ninjas.com/api/quotes">API Ninjas</a></li> -->
    <!-- <li><a href=""> - </a></li>
    <li><a href=""> - </a></li> -->
  </ul>
</details>

<details>
    <summary>Package, Library, Framework</summary>
      <ul>
        <li><a href="https://jestjs.io/">Jest</a></li>
      </ul>
  </details>

<!-- Features -->
### Tools i have used for this project <a name="tools"></a>
  <details>
    <summary>Code Convention, Code Analysis</summary>
      <ul>
        <li><a href="https://eslint.org/">ESLint</a></li>
        <li><a href="https://webhint.io/">Webhint</a></li>
        <li><a href="https://stylelint.io/">Stylelint</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Lighthouse</a></li>
        <li><a href="https://www.npmjs.com/package/npm-check">node_modules checker</a></li>
      </ul>
  </details>
  <details>
    <summary>Version Control, CI/CD, Hosting Service</summary>
      <ul>
        <li><a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">GitFlow</a></li>
        <li><a href="https://pages.github.com/">Github Pages</a></li>
        <li><a href="https://github.com/features/actions">Github Actions</a></li>
        <li><a href="https://git-scm.com/">Git</a></li>
      </ul>
  </details>
  <details>
    <summary>IDE, Desktop Apps, Other Tools</summary>
      <ul>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://desktop.github.com/">Github Desktop</a></li>
        <!-- <li><a href="https://www.figma.com/">Figma</a></li> -->
      </ul>
  </details>

### Key Features <a name="key-features"></a>

<!-- > Describe between 1-3 key features of the application. -->
- fetch data and update redux store
- render UI lists


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->
## 🚀 Live Demo <a name=""></a>

<!-- > Add a link to your deployed project. -->
- Click the following url for [... Live Demo ...](https://react-coordinate-app.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>

<!-- > Describe how a new developer could make use of your project. -->
To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- git version 2.38.x
- node.js version > 12.x
- IDE (visual studio code, etc)
- browser (chrome, firefox, edge, safari)
- install the dependencies

### Setup

Clone this repository to your desired folder:

```sh
  cd react-coordinate-app
  git@github.com:ehmaddd/react-coordinate-app.git
```


### Install

Install this project with:

```sh
  cd react-coordinate-app
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run build (production environment)
  npm start (development environment)
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Run tests

To run tests, run the following command:
Run Github Actions Test
```sh
  npm test

  npx stylelint "**/*.{css,scss}"
  npx eslint "**/*.{js,jsx}"

  auto fix linter with --fix
  npx stylelint "**/*.{css,scss}" --fix
  npx eslint "**/*.{js,jsx}" --fix
```

### Deployment

You can deploy this project using:
GitHub Pages
Example:
```sh
git@github.com:ehmaddd/react-coordinate-app.git
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->
## 👥 Authors <a name="authors"></a>

<!-- > Mention all of the collaborators of this project. -->

👤 **Muhammad Ahmad Saeed**

- GitHub: [@ehmaddd](https://github.com/ehmaddd)
- Facebook: [@ehmaddd](https://web.facebook.com/ehmaddd)
- LinkedIn: [ehmaddd](https://www.linkedin.com/in/ehmaddd/)
- Twitter: [@ehmaddd_pk](https://twitter.com/ehmaddd_pk)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->
## 🔭 Future Features <a name="future-features"></a>

<!-- > Describe 1 - 3 features you will add to the project. -->
- add more countries, provinces, and cities
- create desktop version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [https://github.com/ehmaddd/react-coordinate-app/issues](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->
## ⭐️ Show your support <a name="support"></a>

<!-- > Write a message to encourage readers to support your project -->

If you like this project please follow me on our GitHub:[@ehmaddd](https://github.com/ehmaddd)  or connect on my LinkedIn: [ehmaddd](https://www.linkedin.com/in/ehmaddd/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## 🙏 Acknowledgments <a name="acknowledgements"></a>

<!-- > Give credit to everyone who inspired your codebase. -->
First thing first, I would like to say Alhamdulillah, Thanks to my Families, Microverse and Micronaut's, Reviewer's, Thank you for all of the experiences, lesson and everythings. Moreover, I appreciate the efforts of Nelson Sakwa on Behance for creating such a wonderful design which I followed to create this gorgeous app.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
