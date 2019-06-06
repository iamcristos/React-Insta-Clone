import React, {Component} from 'react';
import uuid from 'uuid';
import SearchBar from '../SearchBar/SearchBar'
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import AddComment from './AddComment';
import '../../App.css';
class PostsPage extends Component {
  state = {
    data : [],
    message: '',
    searchUser: ''
  }

  async componentDidMount() {
    dummyData.map(data=>data.userLike=false)
   if( window.localStorage.getItem('data') === null) {
     await window.localStorage.setItem('data', JSON.stringify(dummyData))
   }
   await this.setState({data:JSON.parse(window.localStorage.getItem('data'))})
  }

  updateComment( postId, postComment) {
    const updateComment = [...this.state.data].map(comments=>{
      if(comments.id === postId) {
          comments = postComment
       }
       return comments
    })
    window.localStorage.setItem('data', JSON.stringify(updateComment))
    this.setState({data:updateComment})
  }

  addNewComment = (e, postId)=>{
    e.preventDefault()
    const text = this.state.message
    if(text.trim() !== '') {
      const postComment= this.state.data.find(data=> data.id === postId )
        const username = localStorage.getItem('username')
        const post = {id:uuid(), username, text}
        const updatedPost = postComment.comments.concat(post)
        postComment.comments = updatedPost
        this.updateComment(postId,postComment)
    }
  }

  onChangeHandler = (e)=>{
      this.setState({message:e.target.value})
  }

  onLikeHandler = (e,postId)=>{
      const comments = this.state.data.find(comment=> comment.id === postId)
      let likes;
      if (comments.userLike) {
        likes = comments.likes - 1
        comments.userLike = false
      } else {
        likes = comments.likes + 1
        comments.userLike = true
      }
      comments.likes = likes
      this.updateComment(postId, comments)
  }

  searchHandler = (e)=>{
      this.setState({searchUser: e.target.value});
      this.setState({data:JSON.parse(window.localStorage.getItem('data'))})
      if (e.target.value.length ) {
        const search = this.state.data.filter(posts=> posts.username.includes(this.state.searchUser))
        this.setState({data:search})
      }
  }

  deleteCommentHandler = (e,commentId,postId)=>{
    const data = this.state.data
    const comments = data.map(post=> {

      if (post.id === postId) {
        post.comments = post.comments.filter(comment=> comment.id !== commentId)
      }
      return post
    })
    window.localStorage.setItem('data', JSON.stringify(comments))
    this.setState({data:comments})
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchHandler}/>
        {this.state.data.length ?this.state.data.map(data=>(
          <div  key={data.id} >
            <PostContainer data={data} like={this.onLikeHandler} postId={data.id} deleteComment={this.deleteCommentHandler}/>
            <AddComment onSubmit={this.addNewComment}
              postId={data.id}
              onChange={this.onChangeHandler}/>
          </div>
        )): null}
      </div>
    );
  }
}


export default PostsPage;
