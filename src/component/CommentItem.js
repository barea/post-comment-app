import React from 'react';
import {Card} from 'reactstrap';

class CommentItem extends React.Component {
	render() {
		 const {name, email, body} = this.props.comment;
		return (
			<div class="card bg-light mb-3" style={{width: '35rem'}}>
			  <div class="card-header">{email}</div>
			  <div class="card-body">
			    <h4 class="card-title">{name}</h4>
			    <p class="card-text">{body}</p>
			  </div>
			</div>
		);
	}
}

export default CommentItem;