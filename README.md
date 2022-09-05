# **Search Norris - Chuck Norris Jokes API**

This application fetches Chuck Norris jokes from an external API.\
You can search for jokes related to a word or text entered in the search field.

## **How do I run the project?**

In the project directory, you can run:

### `npm install`

First of all, install the project.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:coverage`

This is so that when the test is run, the dev has more detailed coverage of the test performed. It shows if the test covered everything he should test.

### `npm run cypress:open`

To run [Cypress](https://docs.cypress.io/guides/getting-started/opening-the-app#What-you-ll-learn) in the project.\
This command opens the Cypress panel to run end-to-end tests.

If you prefer to run in the terminal from the project directory, just run `npx cypress run`.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## **API**

I used the API [chucknorris.io](https://api.chucknorris.io/) to get the jokes. These are jokes about the actor Chuck Norris.

## **Some of the technologies used**

I chose to make this application in React JS because it is a library that I have been using a lot.

- **It has been used:**

[SASS](https://sass-lang.com/documentation/) - Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

[Axios](https://axios-http.com/docs/intro) - Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

[Lottie](https://lottiereact.com/) - Lottie is a library for Android, iOS, Web, and Windows that parses Adobe After Effects animations exported as json with Bodymovin and renders them natively on mobile and on the web.

[React Spinner Loader](https://openbase.com/js/react-loader-spinner/documentation) - provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view.

[React Toasty](https://fkhadra.github.io/react-toastify/migration-v8/) - allows you to add notifications to your app with ease (*version 8.0.3.*).

[Jest](https://jestjs.io/docs/getting-started) - created to test the React framework, also created by Facebook. But its implementation has become much broader, being used as a unit testing tool for several JavaScript platforms like Node and Redux, and even TypeScript platforms like Angular and Ionic.

[React Test Renderer](https://reactjs.org/docs/test-renderer.html) - This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment. Essentially, this package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or jsdom.

[Cypress](https://docs.cypress.io/guides/overview/why-cypress) - Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
