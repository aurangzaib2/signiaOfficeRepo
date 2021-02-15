import React, {useState} from 'react';
import deleteIcon from "../../assets/img/delete-icon.png";
import editIcon from "../../assets/img/edit-icon.png";
import image18 from "../../assets/img/image18.png";
import {useQuery} from '@apollo/client';
import { gql, useMutation } from '@apollo/client';
import { GET_ALL_BLOGS } from '../constants';
import './blog.css';
import { Link } from "react-router-dom";

const DevBlogs = () => {

    const DeleteBlog = gql`mutation deleteBlog($id: String!) {
        deleteBlog(id: $id)  
    }`;
    const [id, setId] = useState("");

    // const [createLink, { loadingd, errord }] = useMutation(DeleteBlog, {
    //     variables: {
    //         id: id
    //         //onCompleted: () => history.push('/events') 
    //     }
    // });

    const [createLink, { loadingd, errord }] = useMutation(DeleteBlog); 

    const { loading, error, data } = useQuery(GET_ALL_BLOGS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log (data);

   
    return (
       
        <div className="container-fluid" >
        <div className="row">
            <div className="col-lg-10 pl-50 mb-50">
                <div className="community white-default mt-50">
                    <h1>Developers blog</h1>
                </div>
            </div>
            <div className="col-lg-2 mt-50 pr-50">
                <div className="page-button">
                    <Link className="btn btn-primary button" to="/addyourblog" > Add Your Blog </Link>
                    
                </div>
            </div>
        </div>
        <div className="row" >
            <div className="col-lg-12 pl-50 pr-50">
                <div className="dev-blogs">
                    <table className="table table-hover table-responsive white-default">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Written by</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                            {data.getAllBlogs.map( getAllBlogs => {
                                //console.log(getAllBlogs.id);
                                return (
                                    
                        <tbody>
                            <tr>
                                <td>
                                
                                    <div className="table-title" key={getAllBlogs.id}>
                                        <img src={image18} alt="#" />
                                        <span>{getAllBlogs.Title}</span>
                                        {/* <span className="light-blue">Blog title xyz the blog is great and helpful</span> */}
                                    </div>
                                </td>
                                <td>
                                <span>{getAllBlogs.Message}</span>
                                    {/* <span>Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</span> */}
                                </td>
                                <td>
                                    <span>Kuassi Mensah<br /><small>JANUARY 31, 2021</small></span>
                                </td>
                                {/* {setId({ ...id, id: getAllBlogs.id})} */}
                                <td>
                                    {/* <img src={editIcon} /> */}
                                    <button onClick={() => createLink({
                                         variables: { id: getAllBlogs.id }, 
                                          refetchQueries: [{query: GET_ALL_BLOGS}],

                                    })//createlink closing
                                    }>Delete</button>
                                </td>
                                <td>
                                    <img src={deleteIcon} />
                                </td>
                            </tr>
                        </tbody> )})}
                    </table>
                    <br />
                    <button className="btn btn-primary button" type="submit">Publish</button>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    </div>
                            );                            
};

export default DevBlogs;