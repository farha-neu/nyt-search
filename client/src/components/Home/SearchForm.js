import React from "react";
import './Home.css';

const SearchForm = props => (
  <div className="card">
        <div className="card-header">
          <img src="images/search.png" alt="search"/> Search Parameters
        </div>
        <div className="card-body">

          <form>
              
            <div className="form-row">
                <div className="form-group col-md-5">
                  <label for="topic">Topic<span class="rc">*</span></label>
                  <input  onChange={props.handleInputChange} value={props.search} name="search"
                  type="text" className="form-control" id="search" placeholder="Topic"/>
                </div>
                <div className="form-group col-md-3">
                  <label for="start year">Start Year</label>
                  <input onChange={props.handleInputChange}  value={props.startYear} name="startYear"
                  type="text" class="form-control" id="startYear" placeholder="Start Year"/>
                </div>
                <div className="form-group col-md-3">
                  <label for="end year">End Year</label>
                  <input onChange={props.handleInputChange} value={props.endYear} name="endYear"
                  type="text" class="form-control" id="endYear" placeholder="End Year"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="searching">Search!</label>
                    <button onClick={props.handleFormSubmit} className="btn btn-info"> 
                          <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
          </form>
        </div>
  </div>
 
);

export default SearchForm;
