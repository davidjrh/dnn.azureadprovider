import React, {Component} from "react";
import App from "../components/App";
import DevTools from "./DevTools";

class Root extends Component {
    render() {
        return (
            <div>
                <App />
                <DevTools />
            </div>
        );
    }
}

export default Root;