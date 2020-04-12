This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Key aspects 

### React 
* I chose React to develop the page 

Components are separarted into diferrent folders. 
* minorr Components are at `src/components` those arrer reusable componetns forr the entirer app
* screenComponents arer the main components where minor componets are joined to complete the entirre page 
* screen COmponetns can has its own minor components those arre for specific use of the screen

### Style 
JSS was used to manage the style into the components.
* Allow create css into js, 
* Embed css declaration into the js in a clear way
* Components have its own style definition
* style has access to components props to improve styling  

### Redux and saga
* Redux was used to manage the whole state of the page there arer storred a list of the topics and votes of each one.
* Sagas is used to save and restore the state with localStorage savin everry vote in json format in a key called `store`.

### react router
* is the tool to manage routes into react to avoid reloading the entirer page.
