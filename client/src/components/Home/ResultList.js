import React from "react";
import Button from "./Button";
import Moment from 'react-moment';

const ResultList = props => 
    
            <ul className="list-group">
                {props.results.map(result => (
                <li className="list-group-item" key={result._id}>
                     <a href={result.web_url}>{result.headline.main}</a> <br/> {result.snippet} <br/>
                     <Moment format="YYYY/MM/DD h:mm:ssa">{result.pub_date}</Moment> <br/>
                     <Button article={{articleId: result._id,title : result.headline.main,snippet:result.snippet,date:result.pub_date,url:result.web_url}}/>
                </li>
                ))}
            </ul>
  

export default ResultList;
