import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: []
        };
    }

    changeHandler = event => {
        this.setState({ task: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({ name: ''});
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.task}
                    onChange={this.changeHandler}/>
                <button type="submit">Add to list</button>
            </form>
        );
    }
}

export default TodoForm;