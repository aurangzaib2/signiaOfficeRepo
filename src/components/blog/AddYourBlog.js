import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './blog.css';
import { useMutation } from '@apollo/client';
import { BLOGS_TODOS } from '../constants';
import Header from '../Header';
import BackLink from '../backLink/BackLink';
import AvatarDummy from '../../assets/img/avatar.png';

const AddYourBlog = () => {

    
    const [formState, setFormData] = useState({
        title: '',
        message: '',
        dateEntered: false
    });
    
const [createLink, { loading, error }] = useMutation(BLOGS_TODOS, {
    variables: {
        createBlogInput:{
            Title: formState.title,
            Message: formState.message
        },
    //onCompleted: () => history.push('/events') 
    }
  });
  if (loading) return 'data is loading worth a wait';
  if (error) return <p>An error occurred</p>;

const submitForm = (e) => {
    e.preventDefault();
    //validation takes place here.
    setFormData({
        dateEntered: true
    })
    createLink();
} 

const logoutHandler = () => {
    window.location.pathname = "/";
        }
    return (
        <>
            <Header
                logoutText={"Logout"}
                onClickLogout={logoutHandler}
                name={"dummy name"}
                resource={"Resource"}
                support={"Support"}
                events={"Events"}
                imageTag={<img className="profile-user-image" src={AvatarDummy} />}
            />
        <div className="container-fluid">
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-10">
                <div className="top-page-heading white-default">
                    <h1>Add your blog</h1>
                </div>
            </div>
            <div className="col-lg-2">
                <div>
                    
                    <BackLink link='/newlanding'>Back</BackLink>
                
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <form className="page-form add-blog">
                    <div className="form-group">
                    <input type="email" className="form-control" 
                        id="exampleFormControlInput1" placeholder="Title"
                        value={formState.email} 
                        onChange={(e)=>{
                            setFormData({
                                ...formState,
                                title: e.target.value.trim()
                            })
                        }}/>
                        {/* <input type="text" className="form-control" id="fname" name="fname" placeholder="Title" /> */}
                        <button className="btn btn-primary button" type="submit">Upload Media</button>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Go ahead... we’re listening!!" 
                        rows="3"
                        value={formState.message} 
                        onChange={(e)=>{
                            setFormData({
                                ...formState,
                                message: e.target.value.trim()
                            })
                        }}></textarea>
                        {/* <textarea className="form-control2" id="exampleTextarea"rows="4" placeholder="Go ahead... we’re listening!!"></textarea> */}
                    </div>
                    <br />
                    <br />
                    <button className="btn2 btn-primary button"  onClick={submitForm} type="submit">Publish</button>
                    <br /><br/>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default AddYourBlog;