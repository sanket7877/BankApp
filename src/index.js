import React from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";
import HelloWorld from "/HelloWorld";
import "./style.css";

function App() {
    return (
        <div className="App">
            <Todo />
            <HelloWorld/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
