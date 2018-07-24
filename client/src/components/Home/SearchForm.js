import React from "react";
import './Home.css';

const SearchForm = props => (
  <div className="card">
        <div className="card-header text-center">
          <img src="images/search.png" alt="search" class="search-icon"/><span className="search-header">Search Parameters</span></div>
        <div className="card-body">

          <form>
              
            <div className="form-row">
                <div className="form-group col-md-5">
                  <label htmlFor="topic">Topic<span className="rc">*</span></label>
                  <input  onChange={props.handleInputChange} value={props.search} name="search"
                  type="text" className="form-control" id="search" placeholder="Topic"/>
                   {props.errorInput===true?<div className="mt-1 rc"> Please enter a topic</div>:""}
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="start year">Start Year</label>
                  <input onChange={props.handleInputChange}  value={props.startYear} name="startYear"
                  type="text" className="form-control" id="startYear" placeholder="Start Year"/>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="end year">End Year</label>
                  <input onChange={props.handleInputChange} value={props.endYear} name="endYear"
                  type="text" className="form-control" id="endYear" placeholder="End Year"/>
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="searching">Search!</label>
                  <button onClick={props.handleFormSubmit} className="btn btn-info"> 
                        <i className="fas fa-search"></i>
                  </button>
                </div>
            </div>
          </form>
        </div>
  </div>
 
);

export default SearchForm;
