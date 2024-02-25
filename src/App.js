import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostTable from './components/PostTable';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userIdFilter, setUserIdFilter] = useState('');
  const [bodyFilter, setBodyFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    filterPosts();
  }, [userIdFilter, bodyFilter]);

  const filterPosts = () => {
    let filtered = posts.filter(post => {
      if (userIdFilter && post.userId !== parseInt(userIdFilter)) {
        return false;
      }
      if (bodyFilter && !post.body.toLowerCase().includes(bodyFilter.toLowerCase())) {
        return false;
      }
      return true;
    });
    setFilteredPosts(filtered);
  };

  const handleUserIdChange = (event) => {
    setUserIdFilter(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBodyFilter(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    let sortedPosts = [...filteredPosts];
    if (event.target.value === 'title') {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredPosts(sortedPosts);
  };

  // Paginacion
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1>Red Efectiva</h1>
      <FilterForm
        userIdFilter={userIdFilter}
        bodyFilter={bodyFilter}
        handleUserIdChange={handleUserIdChange}
        handleBodyChange={handleBodyChange}
      />
      
      <PostTable posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
}

export default App;
