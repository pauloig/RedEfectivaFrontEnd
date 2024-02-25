import React from 'react';

function FilterForm({ userIdFilter, bodyFilter, handleUserIdChange, handleBodyChange }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Filtros</h5>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" className="form-control" id="userId" value={userIdFilter} onChange={handleUserIdChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <input type="text" className="form-control" id="body" value={bodyFilter} onChange={handleBodyChange} />
        </div>
      </div>
    </div>
  );
}

export default FilterForm;
