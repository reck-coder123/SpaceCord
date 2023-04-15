import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

const Inscribe=()=>{
    const [data, setData]=useState({
        title:"",
        content:"",
    });

    const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

    const handleChange=({currentTarget:input})=>{
        setData({ ...data, [input.name]: input.value });
        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const url= "http://localhost:8080/api/inscribe";
           const { data: res } = await axios.post(url, data);
           setMsg(res.message);
           window.location = "/";
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }
    return(
        <>
        <div className="container">
        {error && <div className={styles.error_msg}>{error}</div>}
        {msg && <div className={styles.success_msg}>{msg}</div>}   
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text"  name="title" onChange={handleChange} value={data.title} placeholder="Enter title" required />

            <label htmlFor="Content">Title</label>
            <input type="text" name="content" onChange={handleChange} value={data.content} placeholder="write your content" required />

            <button type="submit" className="btn btn-dark" onSubmit={handleSubmit}>inscribe</button>
        </form>
        </div>
        
        </>
    )
}
export default Inscribe;