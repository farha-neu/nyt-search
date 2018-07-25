import React from "react";
import axios from "axios";
import ReactTooltip from 'react-tooltip';

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
            <div>
                <ReactTooltip />
                {this.state.saved===0?
                <button className="btn btn-sm btn-info" data-tip="Save for Later"
                onClick={()=>this.saveArticle(this.props.article)}><i className="fas fa-bookmark"></i></button>:
                <button className="btn btn-success btn-sm" data-tip="Saved!"
                onClick={()=>this.saveArticle(this.props.article)}><i className="fas fa-check"></i></button>}          
            </div>     
        )
    } 
}


export default Button;
 