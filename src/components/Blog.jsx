import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Initialize Contentful client
const client = createClient({
  space: '2jexpyrztvij',  // Space ID
  accessToken: 'YzBskc2zcejeV-b1hJZ5r_19dF3Pf0Ds_lOKPMsb5LY',  // Content Delivery API Access Token
});

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 10rem auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Post = styled.div`
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack children vertically */
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const DateText = styled.p`
  font-size: 1.5rem;
  color: #df208e;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: black;
  margin: 10px 0;
`;

const ReadMoreContainer = styled.div`
  display: flex; /* Use flexbox to position items */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center vertically */
`;

const ReadMore = styled(Link)`
  color: #007bff;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 20px 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 6rem;
  color: #333;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the image */
  margin-bottom: 1rem; /* Spacing below the image */
`;

const FeaturedImage = styled.img`
  width: 600px; /* Set a specific width */
  height: 300px; /* Maintain aspect ratio */
  border-radius: 8px;
  object-fit: cover; /* Ensures the image covers the defined width and height */
`;

// Function to fetch blog posts
const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
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

  const truncateContent = (content, maxLength) => {
    const plainText = content.content.map(block =>
      block.content.map(text => text.value).join(' ')
    ).join(' ');

    return plainText.length > maxLength ? `${plainText.substring(0, maxLength)}...` : plainText;
  };

  return (
    <Container>
      <Heading>Our Blogs</Heading>
      {blogPosts.length > 0 ? (
        blogPosts.map(post => {
          const featuredImageUrl = post.fields.featuredImage?.[0]?.fields?.file?.url;
          const imageUrl = featuredImageUrl ? `https:${featuredImageUrl}` : '';

          return (
            <Post key={post.sys.id}>
              {imageUrl && (
                <ImageContainer>
                  <FeaturedImage src={imageUrl} alt={post.fields.title} /> {/* Display featured image */}
                </ImageContainer>
              )}
              <Title>
                <Link to={`/blog/${post.fields.slug}`} className="link">
                  {post.fields.title}
                </Link>
              </Title>
              <DateText><strong>Published on:</strong> {new Date(post.fields.publishDate).toLocaleDateString()}</DateText>
              <Description>
                {truncateContent(post.fields.body, 350)} {/* Truncate the content to 150 characters */}
              </Description>
              <ReadMoreContainer>
                <ReadMore to={`/blog/${post.fields.slug}`}>Read More</ReadMore>
              </ReadMoreContainer>
              <Separator />
            </Post>
          );
        })
      ) : (
        <p>No blog posts found.</p>
      )}
    </Container>
  );
};

export default Blog;
