import React from 'react' ;
import axios from 'axios';
import CommentItem from './CommentItem';
import  PropTypes from 'prop-types';

export class Comments extends React.Component {

	state=
	{
		comments : []
	}

	componentDidMount() {
		
    axios
      .get('https://jsonplaceholder.typicode.com/comments', {
      	params:{
      		postId: this.props.postId
      	}
      })
      .then(res => this.setState({ comments: res.data }));		
   }
	render() {
		
		return this.state.comments.map((comment) => (
			<CommentItem key={comment.id} comment={comment} />
			))
	}
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default Comments;