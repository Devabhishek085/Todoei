import React from "react";

const ToDoItem=(props) => {
    return (
        <li class="todo-item">
            <span>
                <input type="checkbox" />
                <span className="todo-item-next">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    )
}
export default ToDoItem;