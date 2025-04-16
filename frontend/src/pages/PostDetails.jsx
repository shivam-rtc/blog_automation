import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import api from "../services/api"
import image from "../assets/image.png"
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data.data);
      } catch (err) {
        console.error("❌ Failed to fetch post", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="loading">Loading article...</p>;
  if (!post) return <p className="error">Post not found.</p>;

  return (
    <article className="post-container">
     <div className="post-header">
  <h1 className="post-title">{post.title}</h1>
  {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
  {post.readTime && (
    <p className="post-meta">{post.readTime} min read</p>
  )}
</div>

      {/* <img src={post.image} alt={post.title} className="post-image" /> */}
      <img src={image} alt={post.title} className="post-image" />

      <div className="post-content">
  <ReactMarkdown>{post.content}</ReactMarkdown>
</div>
    </article>
  );
};

export default PostDetails;
