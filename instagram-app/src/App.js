import React, {Component} from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import {withAuthenticate} from './authentication/withAuthenticate'
import Login from './components/Login/Login'
class App extends Component {
 render (){
   const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)
   return (
     <div>
        <ComponentFromWithAuthenticate/>
     </div>
    
   )
 }
}


export default App;
