import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import '../styles/Blog.css'; // Import the CSS file

// Initialize Contentful client
const client = createClient({
  space: '2jexpyrztvij',  // Space ID
  accessToken: 'YzBskc2zcejeV-b1hJZ5r_19dF3Pf0Ds_lOKPMsb5LY',  // Content Delivery API Access Token
});

// Function to fetch blog posts
const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',  // Content Type ID
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Blog component
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
    };
    getBlogPosts();
  }, []);

  return (
    <div className="container">
      <h1>Our Blogs</h1>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post.sys.id} className="post">
            <h2 className="title">
              <Link to={`/blog/${post.fields.slug}`} className="link">
                {post.fields.title}
              </Link>
            </h2>
            <p className="date"><strong>Published on:</strong> {new Date(post.fields.publishDate).toLocaleDateString()}</p>
            <hr className="separator" />
          </div>
        ))
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
};

export default Blog;
