import React from "react";
import Button from "./Button";
import Moment from 'react-moment';
import './Home.css';

const ResultList = props => 
    
        <div className="card mt-4 mb-4">
            <div className="card-header text-center">
                <img src="images/result.png" alt="result" className="search-icon"/> {props.latestStory===true?
                <span className="search-header">Todays latest stories</span>:
                <span className="search-header">Search Results</span>}
            </div>
            <div className="card-body">
                <div className="row ml-2 mr-2">
                {props.results.length===0?
                 <div className="col-md-12 news text-center">
                     <p className="headline"> No news found!</p>
                 </div>
                 
                 :

                props.results.map(result => (
                    <div className="col-md-12 news" key={result._id}>
                        <div className="row">
                            <div className="col-md-9">
                                <p className="headline"><a href={result.web_url}>{result.headline.main}</a></p>
                                <p className="snippet">{result.snippet}</p>
                                <div className="byline"><span>{result.byline? result.byline.original :""}</span><i className="fas fa-circle ml-1 mr-1"></i>
                                <span> <Moment format="YYYY/MM/DD h:mm:ssa">{result.pub_date}</Moment></span> 
                                </div>
                            </div>
                            <div className="col-md-2">
                               {result.multimedia[2]?
                               <img className="img-fluid news-img" alt='news-pic' src={`https://static01.nyt.com/${result.multimedia[0].url}`} />
                               :""} 
                               
                            </div>
                            <div className="col-md-1">
                                    <Button article={{articleId: result._id,title : result.headline.main,snippet:result.snippet,date:result.pub_date,url:result.web_url,
                                                      byline:result.byline? result.byline.original :"",image:result.multimedia[2]?result.multimedia[0].url:""}}/>
                            </div>
                        </div>
                    </div>
                ))}
                
                </div>
            </div>
        </div>
  

export default ResultList;


               
                 