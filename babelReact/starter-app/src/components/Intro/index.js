import React, { Component } from 'react';

class Intro extends Component {
    render() {
        const { message } = this.props
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