This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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


### UX Experince and Challenges

For the purpose of the demo I went for a straight forward form with the neccesary fields required to submit the field data.
I used the a custom bootstrap theme as my css framework to handle my layout and components. I used these these very same base components to create a reusable modern alert notficationn that appears under the navbar after you submit the data rather than go with a modal that breaks the immersion of the experience. The aim is to create a seamless expereince without comporomising on the information that the user needs to know or rather what actions they are doing.

I've created a simple Table compononent beneath the form to illustrtate the data being submitted through a mock API. I struggled to understand and get Umbraco running in time for the submission of the assessment so as per Riaans suggestion I just went with a simple JSON file that acts as my mock API but to illustrate that I have an understanding of the concept of creating a service and consuming an API. I've created the shell of a service that is ready to consume any endpoint and work with the data that comes back. 

My common practices would also to be to ensure that I create propTypes to assist me in avoiding consuming unexpected data types, for the purposes of this assessment I have not employed the dependency. I also would rather use typescript to assist in writing the best possible javascript code but this was not a requirement for the assessment.

