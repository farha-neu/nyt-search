import React from "react";

const NoteBox = () => (
  <div className="col-md-12">
      <form>
        <div classNamr="form-group">
            <h4>Notes</h4>
            <textarea className="form-control" id="note" rows="3"></textarea>
          </div>
        </form>
  </div>
);

export default NoteBox;
