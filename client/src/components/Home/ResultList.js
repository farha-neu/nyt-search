import React from "react";
import Button from "./Button";

const ResultList = props => 
    
            <ul className="list-group">
                {props.results.map(result => (
                <li className="list-group-item" key={result._id}>
                    {/* {result.multimedia[2]?
                    <img alt='name' src={`https://static01.nyt.com/${result.multimedia[2].url}`} />:""} */}
                     <a href={result.web_url}>{result.headline.main}</a> <br/> {result.snippet} <br/> {result.pub_date} <br/>
                     <Button article={{title : result.headline.main,snippet:result.snippet,date:result.pub_date,url:result.web_url}}/>
                </li>
                ))}
            </ul>
  

export default ResultList;
