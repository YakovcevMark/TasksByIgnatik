import React from 'react'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./p2-homeworks/h10/bll/store";

const root = createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
