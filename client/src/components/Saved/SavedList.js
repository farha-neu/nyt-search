import React from "react";
import Moment from 'react-moment';
import NoteBox from './NoteBox';


class SavedList extends React.Component{
    state={
        clicked : false
    }
   showNote=()=>{
       var st = this.state.clicked;
        return(this.setState({clicked:!st}));
    }
       
    render(){
        return (
            <li className="list-group-item" key={this.props.id}>
                <a href={this.props.url}>{this.props.title}</a> <br/> {this.props.snippet} <br/> <Moment format="YYYY/MM/DD h:mm:ssa">{this.props.date}</Moment> <br/> 
                <Moment format="YYYY/MM/DD h:mm:ssa">{this.props.dateSaved}</Moment><br/>
                <button className="btn btn-sm btn-danger" onClick={()=>this.props.removeArticle(this.props.id)}>Remove from Saved</button>{" "}
                <button className="btn btn-sm btn-danger" onClick={this.showNote}>Notes</button>{" "}
                {this.state.clicked===true?<NoteBox/>:""}
            </li>
        )
    }
}     

export default SavedList;
