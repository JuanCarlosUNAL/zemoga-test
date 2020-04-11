import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import Navigation from './navigation';

// import * as serviceWorker from './serviceWorker';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
// serviceWorker.unregister();
