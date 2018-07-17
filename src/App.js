import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {

    const name = 'react';
    const value = 3;

    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color : 'white',
      fontSize : '12px'
    };

    return (
      <Fragment>
        {
          1 + 1 === 2 ? <div>Yes</div> : <div>No</div>
        }
        {
          1 + 1 === 2 && <div>Yes</div>
        }
        {
          (() => {
            if(value === 1) return (<div>하나</div>);
            if(value === 2) return (<div>둘</div>);
            if(value === 3) return (<div>셋</div>);
          })()
        }
        <div style = {style}>
          this is style
        </div>
        <div className="App">
          React
        </div>
        {/* {주석은 이렇게} */}
      </Fragment>
    );
  }
}

export default App;
