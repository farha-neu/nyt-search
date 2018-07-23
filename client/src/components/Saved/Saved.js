import React from 'react';
import './Saved.css';
import SavedList from "../SavedList";
import axios from "axios";

class Saved extends React.Component{
   state={
     results:[]
   }
  
   componentDidMount(){
     console.log("component did mount");
     this.getSavedArticles();
   }
   
   getSavedArticles=()=>{
      axios.get("/api/articles").then((response) => {
        this.setState({
          results: response.data
        });
      });
  }
   
   
  render(){
    var a = this.state.results;
    console.log("a",a);
    return(
      <SavedList results={this.state.results}/>
    )
  }

}

export default Saved;