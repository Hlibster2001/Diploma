import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DrugStore from "./store/DrugStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        drug: new DrugStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);