import React from "react";
import Moment from 'react-moment';



const SavedList = props => 
            <ul className="list-group">
                {props.results.map(result => (
                <li className="list-group-item" key={result._id}>
                     <a href={result.url}>{result.title}</a> <br/> {result.snippet} <br/> <Moment format="YYYY/MM/DD h:mm:ssa">{result.date}</Moment> <br/> 
                     <Moment format="YYYY/MM/DD h:mm:ssa">{result.dateSaved}</Moment><br/>
                     <button className="btn btn-sm btn-danger" onClick={()=>props.removeArticle(result._id)}>Remove from Saved</button>
                </li>
                ))}
            </ul>
  

export default SavedList;
