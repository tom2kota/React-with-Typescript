import React from "react";

interface ChildProps {
    color: string
}

export const Child = ({color}: ChildProps) => <div>
    <h2>Child Component</h2>
    <p>Color: {color}</p>
</div>
