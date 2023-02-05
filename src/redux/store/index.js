import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../root_reducer';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: [''],
// };
const commonMiddleware = [thunk, ];

// Run the loggerMiddleware, even in production.
const middleware = [...commonMiddleware];

// const persistedReducer = persistReducer(persistConfig, RootReducer);

var store = createStore(RootReducer, compose(applyMiddleware(...middleware)));
// let persistor = persistStore(store);

export { store };
