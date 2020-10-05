import React from 'react';
import './ShowBox.css'

class ShowBox extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {isBoxVisible: false};
    }

    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    };

    render() {
        const { isBoxVisible } = this.state;
      
        return (
          <div className="App">
            <button onClick={this.toggleBox}>Show Box</button>
      
            <div className={`box${isBoxVisible ? "" : "hidden"}`}>
              <p>I'm the box</p>
            </div>
      
          </div>
        );
      }
}

export default ShowBox;