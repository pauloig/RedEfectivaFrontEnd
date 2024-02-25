import React, { useState } from 'react';
import './PostTable.css'; 

function PostTable({ posts }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedPosts = () => {
    const sortablePosts = [...posts];
    if (sortConfig.key !== null) {
      sortablePosts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortablePosts;
  };

  const arrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
    }
    return null;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Posts</h5>
        <p className="card-text">Click en el encabezado de cada columna para ordenar por esa columna. Click de nuevo para cambiar entre orden ascendente y descendente.</p>
        <table className="table">
          <thead className="table-header"> 
            <tr>
              <th onClick={() => requestSort('userId')}>User ID {arrow('userId')}</th>
              <th onClick={() => requestSort('title')}>Title {arrow('title')}</th>
              <th onClick={() => requestSort('body')}>Body {arrow('body')}</th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts().map(post => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostTable;
