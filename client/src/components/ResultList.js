import React from "react";

const ResultList = props => 
    
            <ul className="list-group">
                {props.results.map(result => (
                <li className="list-group-item" key={result._id}>
                    {/* {result.multimedia[2]?
                    <img alt='name' src={`https://static01.nyt.com/${result.multimedia[2].url}`} />:""} */}
                     <a href={result.web_url}>{result.headline.main}</a> <br/> {result.snippet} <br/> {result.pub_date} <br/>
                     <button className="btn btn-sm btn-success">Save Article</button>
                   
                </li>
                ))}
            </ul>
  

export default ResultList;
