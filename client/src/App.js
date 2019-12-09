import React, { Component, } from 'react';
import axios from "axios";
import MenuForm from "./components/MenuForm";

class App extends Component {
  state = { todos: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      } )
      .catch( err => {
        console.log(err);
      } )
  }

  addMenu = ( course ) => {
    axios.post('/api/menus', { course })
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], })
    } )
  }

  render() {
    return (
      <div>
        <MenuForm addMenu={this.addMenu}/>
      </div>
    );
  }
};



export default App;
