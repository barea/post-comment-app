import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import axios from 'axios';
import Comments from './Comments' ;
import { BrowserRouter as Router , Route, Link, IndexRoute} from 'react-router-dom';


export class PostItem extends React.Component {
	
	state ={
		users : [],
		name : ""
	};
	componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ users: res.data }));
  }

	render() {
		 const {userId, id, title, body} = this.props.post;
		 this.state.users.map((user) => {
  		if(user.id === userId)
  		{
  			this.state.name = user.name;
  		}

  	});
		return (
			<Router>
		  <div class="card border-primary mb-3" style={{width: '40rem' , margin: 'auto'}}>
			  <div class="card-header">{this.state.name}</div>
			    <div class="card-body">
			     <h4 class="card-title">{title}</h4>
			    <p class="card-text">{body}</p>			
			    <Link to={'/comments/'+ id} >Comments</Link>
			    <Route path="/comments/:id" component={Comments} exact />
		  </div>
		  </div>	
		  </Router>		
		);
	}
}

export default PostItem;