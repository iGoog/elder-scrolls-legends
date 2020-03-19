## [See it live - https://eslegends.netlify.com/](https://eslegends.netlify.com/)



## Instructions: 
Check out the project with git, load the dependencies, and run it with npm:

<pre>
git clone https://github.com/iGoog/elder-scrolls-legends.git
cd elder-scrolls-legends
npm install
npm start
</pre>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You may need to update your npm version to a version compatible with it. 

## Notes

I took advantage of not supporting IE and went forward with a CSS Grid based design. I'm quite
happy with how the design turned out. Pay attention to the color shifting search and bottom bar pacifiers
when searching and loading.
There's a little bit of wonkyness with the height of the search input when it comes to running it
in iOS, but I am happy with how it looks. I think it would look awesome to add some card flipping animations.

In terms of code, I dove straight into React. The state management is heavily in the top level App.js
and the main reducer could probably be broken out into a custom hook. I feel like the hooks should be cleaner,
but they're pretty new to me. Adding tests would also be a good idea. I hooked it up to Netlify and was able configure 
it to use Continuous Deployment. I was also able to test applying branch pull requests and previews 
as a part of the process. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/1daf3daf-2df3-4982-8773-fa285bcf9821/deploy-status)](https://app.netlify.com/sites/eslegends/deploys)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
