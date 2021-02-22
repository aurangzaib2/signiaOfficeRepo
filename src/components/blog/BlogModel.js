import React, {useState} from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import './BlogModel.css';


const  BlogModel  = (props) => {

    const [titleBlog, setTitleBlog] = useState(props.title);
    const [messageBlog, setMessageBlog] = useState(props.message);

   
    // const UPDATE_BLOG = gql `mutation updateBlog($id: String!, $updateBlogInput: UpdateBlogInput!) {
    //     updateBlog(id: $id, updateBlogInput: $updateBlogInput){
    //         id
    //         Title,
    //         Message
    //     } 
    //   }`;
    //   const [updateBlogReact, {loading, error, data}] = useMutation(UPDATE_BLOG);
    //   if (loading) return <p>Loading...</p>
    //   if (error) return <p>Error :(</p>

   
    return (
        <>
        <div className="modalhell">
            <header className="modalhell__header">
                <h1>{props.title}</h1>
            </header>
            <div className="modalcontent">
                <div className="form-group">
                    <label htmlFor="email" className="modelhell__label">Blog Title</label>        
                    <input type="text" className="form-control" onChange={(e) => props.titleChange(e.target.value)} value={props.title}/>                    
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="modelhell__label">Blog Message</label>        
                    <input type="text" className="form-control"  onChange={(e) => props.messageChange(e.target.value)} value={props.message}/>                    
                </div>
                    <section className="modelhell__actions">
                        <button className="btn btn-primary   modehell__button" onClick={props.onCancel}>Cancel</button>
                        <button className="btn btn-secondary modehell__button" onClick={props.saveUpdate}>Save</button>
                    </section>
            </div>
            
        </div>
        </>
    );
}

export default BlogModel