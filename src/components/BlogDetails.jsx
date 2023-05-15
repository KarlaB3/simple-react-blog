import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
            }) .then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;