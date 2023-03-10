import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import LayOut from "./LayOut";
import {Provider} from "react-redux";
import {setupStore} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <LayOut>
                <App />
            </LayOut>
        </BrowserRouter>
    </Provider>
)
