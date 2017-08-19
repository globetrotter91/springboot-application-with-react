import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import App from './components/app.component';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';


  
const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app'));


registerServiceWorker();
