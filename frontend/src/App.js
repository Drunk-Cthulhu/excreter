import './App.css';
import axios from "axios"
import React from 'react';


class App extends React.Component{
  state = { details: [], }
  componentDidMount(){
    let data;
    axios.get('http://127.0.0.1:8000')
    .then(res=>{
      data = res.data()
      this.setState({
        details: data
      });
    }).catch(err=> {
      console.log(err);
    })
  }

  render(){
    return(
      <h1>Работает!!</h1>
    )
  }
}
export default App;
