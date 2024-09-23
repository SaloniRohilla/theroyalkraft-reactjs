// BlogPost.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

// Initialize Contentful client
const client = createClient({
  space: '2jexpyrztvij',
  accessToken: 'YzBskc2zcejeV-b1hJZ5r_19dF3Pf0Ds_lOKPMsb5LY',
});

// Styled components
const BlogContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const FeaturedImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  background-color: #fff;
  border-radius: 6px;
  padding: 1rem;
`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
        });

        if (response.items.length > 0) {
          setPost(response.items[0]);
        } else {
          setError(new Error('Post not found'));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching blog post: {error.message}</div>;
  }

  if (!post) {
    return <div>No post available</div>;
  }

  const { title, content, featuredImage } = post.fields;
  const bodyContent = content ? content.content.map(node => node.content.map(item => item.value).join(' ')).join('\n\n') : '';
  const featuredImageUrl = featuredImage?.[0]?.fields?.file?.url;
  const imageUrl = featuredImageUrl ? `https:${featuredImageUrl}` : '';

  return (
    <BlogContainer>
      <Title>{title}</Title>
      {imageUrl && <FeaturedImage src={imageUrl} alt="Featured" />}
      <Content>
        <ReactMarkdown>{bodyContent}</ReactMarkdown>
      </Content>
    </BlogContainer>
  );
};

export default BlogPost;
