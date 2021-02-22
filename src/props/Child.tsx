import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => <div>
    <h2>Child Component</h2>
    <p>Color: {color}</p>
    <button onClick={onClick}>
        Click me
    </button>
</div>

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => <div>
    <h2>Child Functional Component (FC)</h2>
    <p>Color: {color}</p>
     {children}
    <button onClick={onClick}>
        Click me
    </button>
</div>
