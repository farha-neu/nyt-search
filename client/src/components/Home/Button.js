import React from "react";
import axios from "axios";

class Button extends React.Component{ 
    state={
        saved:0
    }
    componentDidMount(){
       this.findSavedArticle(this.props.article.articleId);
    }

    findSavedArticle = (articleId) =>{
        axios.get("/api/article/"+articleId).then((response) => {
           console.log("hi",response.data);
           if(response.data!==null){
            this.setState({saved:1});
           }
        });
    };

    saveArticle = (article) =>{
        axios.post("/api/articles",article).then((response) => {
           console.log(response);
           this.setState({saved:1});
        });
    };

    render(){
        return(
            this.state.saved===0?
            <button className="btn btn-success btn-sm" onClick={()=>this.saveArticle(this.props.article)}>Save Article</button>:
            <button className="btn btn-warning btn-sm" onClick={()=>this.saveArticle(this.props.article)}><i class="fas fa-check"></i>Saved</button>          
        )
    } 
}


export default Button;
