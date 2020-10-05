import React from 'react';

class HelloWorld extends React.Component {

    constructor(props) {
      super(props)
      this.state = {message: ''};
    }

    handleWorldButtonClick = () => {
      this.setState({message: 'World'});
    }
    handleFriendButtonClick = () => {
        this.setState({message: 'Friend'});
    }
    handleReactButtonClick = () => {
        this.setState({message: 'React'});
    }

    render() {
        return (
          <div>
            <p>Hello {this.state.message}!</p>
            <button onClick={() => this.handleWorldButtonClick()}>
              World
            </button>
            <button onClick={() => this.handleFriendButtonClick()}>
              Friend
            </button>
            <button onClick={() => this.handleReactButtonClick()}>
              React
            </button>
          </div>
        )
    }
}

export default HelloWorld;