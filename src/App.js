import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information :[
      {
        id : 0,
        name : 'Master Thief',
        phone : '111-1111-1111'
      },
      {
        id : 1,
        name : 'AI',
        phone : '222-2222-2222'
      }
    ]
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({
        id : this.id++,
        ...data
      })
    })
  }

  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {/* {JSON.stringify(information)} */}
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
