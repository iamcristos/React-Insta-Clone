import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(data=>(
          <PostContainer key={data.timestamp} data={data}/>
        ))}
      </div>
    );
  }
}


export default App;
