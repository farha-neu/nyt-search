import React from "react";
import Moment from 'react-moment';
import NoteBox from './NoteBox';
import "../Home/Home.css";

class SavedList extends React.Component{
    state={
        clicked : false
    }
   showNote=()=>{
       var noteClicked = this.state.clicked;
       return(this.setState({clicked:!noteClicked}));
    }
       
    render(){
        return (
            <div className="col-md-12 news" key={this.props.id}>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="headline"><a href={this.props.url}>{this.props.title}</a></p>
                            <p className="snippet">{this.props.snippet}</p>
                            <div className="byline"><span>{this.props.byline}</span><i className="fas fa-circle ml-1 mr-1"></i>
                            <span> <Moment format="YYYY/MM/DD h:mm:ssa">{this.props.date}</Moment></span></div>
                            <p className="mt-1"> Date Saved: <Moment format="YYYY/MM/DD h:mm:ssa">{this.props.dateSaved}</Moment></p>
                        </div>
                        <div className="col-md-2">
                            {this.props.image?
                            <img className="img-fluid news-img" alt='news-pic' src={`https://static01.nyt.com/${this.props.image}`} />
                            :""} 
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-sm btn-danger mr-2" onClick={()=>this.props.removeArticle(this.props.id)}>REMOVE</button>
                            <button className="btn btn-sm btn-danger" onClick={this.showNote}>Notes</button>
                            {this.state.clicked===true?<NoteBox/>:""}
                        </div>
                    </div>
           </div>
        )
    }
}     

export default SavedList;
