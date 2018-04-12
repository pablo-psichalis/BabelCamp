import React, { Component } from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: props.message
        }
    }

    render() {
        const { message } = this.state

        return (
            <p className="App-intro"
                dangerouslySetInnerHTML={{ __html: message }}
                style={{
                    color: 'lightblue',
                    backgroundColor: 'black'
                }}
            />
        )
    }
}

export default Intro;