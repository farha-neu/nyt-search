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
    var r = window.confirm("The article will be deleted. Proceed?"+id);
    if(r===true){
      axios.delete(`/article/${id}`).then((response)=>{
        this.getSavedArticles();
    });
    }
  }
   
  render(){
    return(
          <ul className="list-group">
            {this.state.results.map(result=>(
              <div>
                  <SavedList url={result.url} title={result.title} 
                  snippet={result.snippet} date={result.date} dateSaved={result.dateSaved} id={result._id} removeArticle={this.removeArticle}/>
              </div>
            ))}
          </ul>
    )
  }

}

export default Saved;