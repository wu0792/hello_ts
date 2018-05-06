import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { enthusiasm } from './reducers'
import { StoreState } from './types'
import * as actions from './actions'
import Hello from './containers/Hello'
import { Provider } from 'react-redux'


const store = createStore<StoreState, actions.BaseAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
})

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
      <Hello />
    </React.Fragment>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

registerServiceWorker();
