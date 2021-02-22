import React from "react";
import ReactDOM from "react-dom";
import Parent from "./props/Parent";

const App = () => <div>
    <Parent/>
</div>

ReactDOM.render(<App/>, document.querySelector('#root'))
