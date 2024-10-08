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
  margin: 10rem auto;
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

        console.log("Response from Contentful:", response); // Log the response

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

  const { title, body, featuredImage } = post.fields;

  // Handling body as text or markdown
  const bodyContent = body?.content
    ? body.content.map(node => 
        node.content.map(item => item.value).join(' ')
      ).join('\n\n')
    : '';

  const featuredImageUrl = featuredImage?.fields?.file?.url
    ? `https:${featuredImage.fields.file.url}`
    : '';

  return (
    <BlogContainer>
      <Title>{title}</Title>
      {featuredImageUrl && <FeaturedImage src={featuredImageUrl} alt={title} />}
      <Content>
        <ReactMarkdown>{bodyContent || "No content available"}</ReactMarkdown>
      </Content>
    </BlogContainer>
  );
};

export default BlogPost;
