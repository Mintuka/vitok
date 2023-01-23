import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import {store} from './state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);