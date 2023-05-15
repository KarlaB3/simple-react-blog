import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Noob KB");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title, body, author};

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }) .then (() => {
            console.log("New blog has been added!");
            navigate("/");
        })

        
    }

    return (
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(event) => setBody(event.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Noob KB">Noob KB</option>
                    <option value="Curious KB">Curious KB</option>
                    <option value="Reflective KB">Reflective KB</option>
                </select>
                <button>Create Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;