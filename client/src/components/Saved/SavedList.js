import React from "react";
import Moment from 'react-moment';
import "../Home/Home.css";
import "./Saved.css";

const SavedList =(props)=>
        (
            <div className="col-md-12 news" key={props.id}>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="headline"><a href={props.url}>{props.title}</a></p>
                            <p className="snippet">{props.snippet}</p>
                            <div className="byline"><span>{props.byline}</span><i className="fas fa-circle ml-1 mr-1"></i>
                            <span> Published: <Moment format="YYYY/MM/DD h:mm:ssa">{props.date}</Moment></span></div>
                            <p className="mt-1"> Date Saved: <Moment format="YYYY/MM/DD h:mm:ssa">{props.dateSaved}</Moment></p>
                        </div>
                        <div className="col-md-2">
                            {props.image?
                            <img className="img-fluid news-img" alt='news-pic' src={`https://static01.nyt.com/${props.image}`} />
                            :""} 
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-sm btn-danger float-md-right" onClick={()=>props.removeArticle(props.id)}><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
           </div>
        )
    

export default SavedList;
