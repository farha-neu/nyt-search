import React from "react";
import './Saved.css';
import axios from "axios";
import Note from "./Note";

class NoteBox extends React.Component{
  state={
    body:"",
    results:[]
  }

  componentWillMount(){
    console.log("component did mount");
    this.retrieveNotes();
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value // name is text
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.body.trim()!==""){
      axios.post("/articles/"+this.props.id,{body:this.state.body}).then((response) => {
        console.log(response);
        this.setState({body:""});
        this.retrieveNotes();
     });
    }  
  };

  retrieveNotes=()=>{
    axios.get("/api/article/"+this.props.articleId).then((response) => {
      this.setState({
        results: response.data.note
      });
    });
  }

  render(){
    console.log(this.state.results);
    return(
      <div className="col-md-12">
        <div className="row">
           <div className="col-md-12">
             <span className="note-header"><i className="fas fa-pen-square"></i> Notes</span>
                <Note results={this.state.results}/>         
            </div>
            
            <div className="col-md-12">
              <form>
                  <div className="form-group">
                      <textarea className="form-control" id="note" rows="2"  onChange={this.handleInputChange} 
                      name="body" value={this.state.body} placeholder="Add a note...."></textarea>
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleFormSubmit} className="btn btn-info btn-note">Post</button>
                    </div>
               </form> 
             </div> 
          </div>
    </div>
    )
  }
}
 


export default NoteBox;