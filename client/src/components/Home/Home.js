import React from 'react';
import './Home.css';
import API from "../../utils/API";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Jumbotron from "../Jumbotron";


class Home extends React.Component{
   state={
     results:[],
     search:"",
     startYear:"",
     endYear:"",
     errorInput:false,
     latestStory:true
   }
  
   componentDidMount(){
     console.log("component did mount");
     this.landingSearch();
   }
   
   landingSearch=()=>{
    API.landingSearch()
      .then(res => this.setState({results: res.data.response.docs.slice(0,5),latestStory:true}))
      .catch(err => console.log(err));
   }
   searchNews=(query,bd,ed)=>{
      API.search(query,bd,ed)
      .then(res => this.setState({results: res.data.response.docs.slice(0,5),latestStory:false}))
      .catch(err => console.log(err));
     
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value // name is search
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.search.trim()!==""){
      this.setState({errorInput:false});
      this.searchNews(this.state.search,this.state.startYear,this.state.endYear);
    }
    else{
      this.setState({errorInput:true});
    }
    
  };


  render(){
    // var a = this.state.results;
    // console.log("a",a);
    return(

      <div>
          <Jumbotron>Search articles of interest!</Jumbotron>
          <div className="container">
              <SearchForm
                  search={this.state.search}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                  errorInput={this.state.errorInput}
                />
              <ResultList results={this.state.results} saved={this.state.saved} latestStory={this.state.latestStory}/>
          </div>
      </div>
    )
  }

}
export default Home;