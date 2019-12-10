import React from 'react';

const Todo = props => {
    return (
        <div className={`task${props.task.completed ? ' completed' : ''}`}
            onClick={event => props.toggleTask(props.task.id)}>
                {props.task.name}
        </div>
    )
};

export default Todo;