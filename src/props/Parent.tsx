import React from "react";
import {Child, ChildAsFC} from "./Child";

const Parent = () => <div>
    <hr/>
    <blockquote>Props with TypeScript:</blockquote>
    <hr/>
    <h1>Parent Component</h1>
    <Child color="green" onClick={() => console.log('clicked')}/>
    <ChildAsFC color="blue" onClick={() => console.log('clicked')}>
        <h3>Children as a prop</h3>
    </ChildAsFC>
    <hr/>
</div>
export default Parent
