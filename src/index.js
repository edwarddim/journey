import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

require("dotenv").config()

// STARTING FIREBASE
require("./config/firebase.config")

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
