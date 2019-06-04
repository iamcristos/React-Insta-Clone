import React, {Component} from 'react';
import uuid from 'uuid';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import AddComment from './components/PostContainer/AddComment'
class App extends Component {
  state = {
    data : [],
    message: '',
    like: false,
    searchUser: ''
  }

  async componentDidMount() {
    window.localStorage.removeItem('data')
   if( window.localStorage.getItem('data') === null) {
     await window.localStorage.setItem('data', JSON.stringify(dummyData))
   }
   await this.setState({data:JSON.parse(window.localStorage.getItem('data'))})
  }

  addNewComment = (e, postId)=>{
    e.preventDefault()
    const text = this.state.message
    if(text.trim() !== '') {
      const postComment= this.state.data.find(data=> data.id === postId )
        const post = {id:uuid(), username:'Cristos', text}
        const updatedPost = postComment.comments.concat(post)
        postComment.comments = updatedPost
       const updateComment = [...this.state.data].map(comments=>{
         if(comments.id === postId) {
             comments = postComment
          }
          return comments
       })
       window.localStorage.setItem('data', JSON.stringify(updateComment))
       this.setState({data:updateComment})
    }
  }

  onChangeHandler = (e)=>{
      this.setState({message:e.target.value})
  }

  onLikeHandler = (e,postId)=>{
      const comments = this.state.data.find(comment=> comment.id === postId)
      let likes;
      if (this.state.likes) {
        likes = comments.likes - 1
        this.setState({likes:false})
      } else {
        likes = comments.likes + 1
        this.setState({likes:true})
      }
      comments.likes = likes
      const updateComment = [...this.state.data].map(comment=>{
        if(comment.id === postId) {
            comment = comments
         }
         return comment
      })
      window.localStorage.setItem('data', JSON.stringify(updateComment))
      this.setState({data:updateComment})
  }

  searchHandler = (e)=>{
      this.setState({searchUser: e.target.value});
      this.setState({data:JSON.parse(window.localStorage.getItem('data'))})
      if (e.target.value.length ) {
        const search = this.state.data.filter(posts=> posts.username.includes(this.state.searchUser))
        this.setState({data:search})
      }
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchHandler}/>
        {this.state.data.length ?this.state.data.map(data=>(
          <div  key={data.id} >
            <PostContainer data={data} like={this.onLikeHandler} postId={data.id}/>
            <AddComment onSubmit={this.addNewComment}
              postId={data.id}
              onChange={this.onChangeHandler}/>
          </div>
        )): null}
      </div>
    );
  }
}


export default App;
