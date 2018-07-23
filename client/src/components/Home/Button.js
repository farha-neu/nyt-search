import React from "react";
import axios from "axios";

class Button extends React.Component{ 
    state={
        saved:0
    }
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
            <button className="btn btn-warning btn-sm" onClick={()=>this.saveArticle(this.props.article)}>Saved</button>          
        )
    } 
}


export default Button;
