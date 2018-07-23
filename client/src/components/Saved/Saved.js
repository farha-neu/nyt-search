import React from 'react';
import './Saved.css';
import SavedList from "./SavedList";
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
   
  removeArticle=(id)=>{
    // var confirmation = confirm("Are you sure you want to delete this article?");
    var r = window.confirm("The article will be deleted. Proceed?");
    if(r===true){
      axios.delete(`/article/${id}`).then((response)=>{
        this.getSavedArticles();
    });
    }
  }
   
  render(){
    var a = this.state.results;
    console.log("a",a);
    return(
      <SavedList results={this.state.results} removeArticle={this.removeArticle}/>
    )
  }

}

export default Saved;