import React from "react";
import './Saved.css';

const NoteBox = () => (
  <div className="col-md-12">
      <form>
        <div className="form-group">
            <span class="note-header"><img src="images/notes.png" alt="note-icon"></img>Notes</span>
            <textarea className="form-control" id="note" rows="3" placeholder="Add a note...."></textarea>
          </div>
        </form>
  </div>
);

export default NoteBox;
