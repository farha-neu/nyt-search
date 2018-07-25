import React from "react";
import './Saved';
import './Saved.css';

const Note = props => (
    props.results.map(result => (
       <div>
            <div key= {result._id} className="note">{result.body}</div>
       </div>
    ))
)

export default Note;