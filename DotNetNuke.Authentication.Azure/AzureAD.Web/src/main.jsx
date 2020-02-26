import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import application from "./globals/application";

let store = configureStore({enabled: false, instrumentationKey: ""});

application.dispatch = store.dispatch;
application.init();

const appContainer = document.getElementById("azureAD-container");
const initCallback = appContainer.getAttribute("data-init-callback");
application.init(initCallback);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    appContainer
);    

