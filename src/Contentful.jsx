import { createClient } from 'contentful';

// Create a Contentful client
const client = createClient({
  space: '2jexpyrztvij',  // Replace with your space ID from Contentful
  accessToken: 'YzBskc2zcejeV-b1hJZ5r_19dF3Pf0Ds_lOKPMsb5LY',  // Replace with your Content Delivery API access token
});

export const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',  // The content type ID you created for the blog posts
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts: ', error);
    return [];
  }
};
