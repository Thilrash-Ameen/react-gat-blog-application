import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Homepage() {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {blogs && <BlogList
        blogs={blogs.filter((blog) => blog.author === "Thilrash")}
        title="Thilrash's Blogs"
      />}
      {blogs && <BlogList
        blogs={blogs.filter((blog) => blog.author === "Ameen")}
        title="Ameen's Blog"
      />}
    </div>
  );
}

export default Homepage;