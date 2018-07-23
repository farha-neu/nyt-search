import React from 'react';
import './Home.css';
import API from "../../utils/API";
import ResultList from "../ResultList";

class Home extends React.Component{
   state={
     results:[]
   }
  
   componentDidMount(){
     console.log("component did mount");
     this.landingSearch();
   }
   
   landingSearch=()=>{
    API.landingSearch()
      .then(res => this.setState({results: res.data.response.docs}))
      .catch(err => console.log(err));
   }
   searchNews=(query,bd,ed)=>{
     API.search(query,bd,ed)
       .then(res => this.setState({results: res.data.response.docs}))
       .catch(err => console.log(err));
  }

  render(){
    var a = this.state.results;
    console.log("a",a);
    return(
      <ResultList results={this.state.results}/>
    )
  }

}
{/* <a href={result.web_url}>{result.headline.main}</a> | {result.snippet} | {result.pub_date} | {result.byline.original} | */}
export default Home;