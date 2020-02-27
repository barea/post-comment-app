import React from 'react';
import Posts from './component/Posts' ;
import axios from 'axios';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

class App extends React.Component {

  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    return (
      <div>
       
        <Posts  posts = {this.state.posts}/>
        
      </div>
    );
  }
}

export default App;