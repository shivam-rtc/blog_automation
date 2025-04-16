import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPosts, fetchTrendingPosts } from "../features/posts/postsSlice";
import PostCard from "../components/postCard";

const Home = () => {
  const dispatch = useDispatch();
  const { latest, trending, loading, error } = useSelector((state) => state.posts);
  console.log("latest", latest)
  console.log(" trending",  trending)


  useEffect(() => {
    dispatch(fetchLatestPosts());
    dispatch(fetchTrendingPosts());
  }, [dispatch]);

  return (
    <div className="home px-10 py-6 max-w-screen-xl mx-auto">
      <section className="latest">
        <h2>🔥 Latest Articles</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latest.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>

      <aside className="trending">
        <h3>📈 Trending</h3>
        {trending.map((post) => (
          <div key={post._id}>
            <strong>{post.title}</strong>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Home;
