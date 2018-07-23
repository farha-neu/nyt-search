import React from 'react';
import './Home.css';
import API from "../../utils/API";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";


class Home extends React.Component{
   state={
     results:[],
     search:"",
     startYear:"",
     endYear:""
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
     API.search(query,bd+"0101",ed+"0101")
       .then(res => this.setState({results: res.data.response.docs}))
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
    this.searchNews(this.state.search,this.state.startYear,this.state.endYear);
  };


  render(){
    var a = this.state.results;
    console.log("a",a);
    return(

      <div>
       <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      <ResultList results={this.state.results} saved={this.state.saved}/>
      </div>
    )
  }

}
export default Home;