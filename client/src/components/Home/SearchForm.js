import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Term..."
        id="search"
      />
      <input
        onChange={props.handleInputChange}
        value={props.startYear}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Start year"
        id="start-year"
      />
      <input
        onChange={props.handleInputChange}
        value={props.endYear}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="End year"
        id="end-year"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
