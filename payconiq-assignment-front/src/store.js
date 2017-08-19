import thunk from 'redux-thunk' ; 
import { createStore, applyMiddleware, compose } from 'redux' ;
import rootReducer from './reducers/root.reducer'; 

export default function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return createStore(rootReducer, initialState, enhancer);
};