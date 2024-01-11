import { Component } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Error from './Error';
import Loading from './Loading';

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: true,
		isError: false,
	};

	componentDidMount = async () => {
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWEwMDA1NTI5ZTM2YjAwMTg2N2VkMDQiLCJpYXQiOjE3MDQ5ODQ2NjIsImV4cCI6MTcwNjE5NDI2Mn0.nFXWF9QKfjg5ayGtBwznZqnrTwLWnZZ05Rx_qhvgKgc',
					},
				}
			);
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				this.setState({ comments: comments, isLoading: false, isError: false });
			} else {
				console.log('error');
				this.setState({ isLoading: false, isError: true });
			}
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, isError: true });
		}
	};

	render() {
		return (
			<div className='text-center' data-testid='comment-area'>
				{this.state.isLoading && <Loading />}
				{this.state.isError && <Error />}
				<AddComment asin={this.props.asin} />
				<CommentList commentsToShow={this.state.comments} />
			</div>
		);
	}
}

export default CommentArea;
