import React from 'react';

import Todo from './Todo';

const TodoList = ( { todos } ) => {

    if(!todos.length) {
        return(
            <h4>Nothing to do!</h4>
        );
    } else {
        return(
            <div>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
                }) }
            </div>
        )
    }
}

export default TodoList;