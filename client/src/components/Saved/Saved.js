import React from 'react';
import './Saved.css';
import SavedList from "./SavedList";
import axios from "axios";
import Jumbotron from "../Jumbotron";

class Saved extends React.Component{
   state={
     results:[]
   }
  
   componentWillMount(){
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
    var r = window.confirm("Are you sure you want to delete this article? Click OK to confirm.");
    if(r===true){
      axios.delete(`/article/${id}`).then((response)=>{
        this.getSavedArticles();
    });
    }
  }
   
  render(){
    return(
         <div>
            <Jumbotron>Save articles for future reference!</Jumbotron>
             <div className="container">
                <div className="card mt-4 mb-4">
                    <div className="card-header text-center">
                      <img src="images/result.png" alt="result" className="search-icon"/> 
                      <span className="search-header">All Saved Articles</span>
                </div>
                <div className="card-body">
                    <div className="row ml-2 mr-2">
                        {this.state.results.length===0?
                        <div className="col-md-12 news text-center">
                            <p className="headline"> No news saved!</p>
                        </div>:
                        this.state.results.map(result => (
                            <SavedList url={result.url} title={result.title} 
                            snippet={result.snippet} 
                            date={result.date} 
                            dateSaved={result.dateSaved} id={result._id} 
                            articleId={result.articleId}
                            image={result.image} 
                            byline={result.byline} removeArticle={this.removeArticle} key={result._id}/>
                        
                   ))}
                  </div>
            </div>
        </div>
     </div>
   </div>
    )}}

export default Saved;