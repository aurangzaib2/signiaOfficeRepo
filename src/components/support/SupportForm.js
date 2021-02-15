// import React from "react";

// const SupportForm = () => {
//     return (
//         <div className="col-md-6 pr-50 mt-150 hr">
//                 <div className="support support-form">
//                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@domain.com" />
//                     <input type="tel" className="form-control" id="phone" name="phone" placeholder="+1 667 (345) 9897" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
//                     <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Go ahead... we’re listening!!" rows="3"></textarea>
//                     <button type="submit" className="btn btn-primary button">Submit</button>
//                 </div>
//             </div>
//     );
// }

// export default SupportForm;

import React, {useState} from "react";
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';

const SupportForm = () => {

const CONCTACTUS_TODOS = gql `mutation createContactUs($createContactUsInput: CreateContactUsInput!) {
    createContactUs(createContactUsInput: $createContactUsInput){
        Email
    } 
}`;
    const [formState, setFormData] = useState({
        email: '',
        contactnumber: '',
        message: '',
        dateEntered: false
    });
    
const [createLink, { loading, error }] = useMutation(CONCTACTUS_TODOS, {
    variables: {
        createContactUsInput:{
            Email: formState.email,
            ContactNumber: formState.contactnumber,
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
    
    return (
        <div className="col-md-6 pr-50 mt-150 hr">
            {/* { dateEntered &&  setTimeout(() => {<h2>Data Entered</h2>}, 1000)} */}
            { formState.dateEntered && <h1>Data Enterd</h1>}
                <div className="support support-form">
                    <input type="email" className="form-control" 
                        id="exampleFormControlInput1" placeholder="email@domain.com"
                        value={formState.email} 
                        onChange={(e)=>{
                            setFormData({
                                ...formState,
                                email: e.target.value.trim()
                            })
                        }}/>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="+1 667 (345) 9897" 
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required 
                        value={formState.contactnumber} 
                        onChange={(e)=>{
                            setFormData({
                                ...formState,
                                contactnumber: e.target.value.trim()
                            })
                        }}/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Go ahead... we’re listening!!" 
                        rows="3"
                        value={formState.message} 
                        onChange={(e)=>{
                            setFormData({
                                ...formState,
                                message: e.target.value.trim()
                            })
                        }}>
                            
                        </textarea>
                    <button type="submit" className="btn btn-primary button" onClick={submitForm}>Submit</button>
                </div>
            </div>
    );
}

export default SupportForm;