import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      data: '',
    };
  }
  
  componentDidMount() {
    fetch('/api/greeting')
    .then((resp) => {
            return resp.json();
        })
    .then((data)=> {
      // Log the data just to demonstrate the call works.
      console.log(data.name);
      this.setState({ data: data.name });
    })
    .catch(function(error) {
      console.error("Error fetching: ", error);
    });
  }
  
  render() {
    return (
      <div className="App">
        <div>Data from server request: {(this.state as any).data}</div>
      </div>
    );
  }
}

export default App;
