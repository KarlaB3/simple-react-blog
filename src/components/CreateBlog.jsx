import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title, body, author};

        console.log(blog);
    }

    return (
        <div className="create">
            <h2>Create new blog</h2>
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default CreateBlog;