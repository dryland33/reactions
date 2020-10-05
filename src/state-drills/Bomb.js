import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0,
                      message: '',
                      detonated: false
                    };
    }

    toggleClass = () => {
        this.setState(prevState => ({ detonated: !prevState.detonated }));
    };

    componentDidMount() {
        //console.log('componentDidMount')
        this.interval = setInterval(() => {
        //console.log('setInterval')
        const newCount = this.state.count + 1;
        
        (this.state.count % 2 === 0) ? (this.setState({message: 'TICK'})) : (this.setState({message: 'TOCK'})); 
        if (this.state.count > 8) {
            (this.toggleClass)
            (this.setState({message: 'BOOM!!!'})); 
            clearInterval(this.interval);}
            document.getElementById('message')
        this.setState({count: newCount});
          this.setState({
          datetime: new Date(),
        })
      }, 1000)
      
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    render() {
    return (<div className="container">
              <p className={`${this.state.detonated ? "detonated" : "notdetonated"}`}>
                {this.state.message}    
              </p>
            </div>
           );
    }
}

export default Bomb;