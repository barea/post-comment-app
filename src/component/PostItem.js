import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import axios from 'axios';

export class PostItem extends React.Component {
	
	state ={
		users : [],
		nsme : ""
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
			
		  <div class="card border-primary mb-3" style={{width: '40rem'}}>
			  <div class="card-header">{this.state.name}</div>
			  <div class="card-body">
			    <h4 class="card-title">{title}</h4>
			    <p class="card-text">{body}</p>
		  </div>
		  </div>			
		);
	}
}



export default PostItem;