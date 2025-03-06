import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/userContext';

export default function Welcome() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        indexNo: ''
    });

    // const [userData, setUserData] = useState([]);
    const { setUserData } = useContext(UserContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({...prevData, [name]: value}));
    }

    const handleUserSubmit = (e) => {
        e.preventDefault();

        if (form.firstName.trim() === "" || form.lastName.trim() === "" || form.email.trim() === "" || form.contactNo.trim() === "" || form.indexNo.trim() === "" ) {
            alert("Please fill in all the blanks.");
            return;
        }

        else if (form.contactNo.length < 10 || form.contactNo.length > 10 || isNaN(form.contactNo)){
            alert("Please enter a valid contact number");
            return;
        }

        else {
            setUserData(form);
            // setUserData((userData) => [...userData, form]);
            // setForm({
            //     firstName: '',
            //     lastName: '',
            //     email: '',
            //     contactNo: '',
            //     indexNo: ''
            // });
            navigate('/quizApp/quiz');
        }

    }

    return (
        <>
            <div className='welcome-container'>
                <div className="welcome-user-container">
                    <h2>Please Enter The Following Details to Start the Quiz</h2>
                    <form>
                        <label>
                            <p>First Name</p>
                            <input name="firstName" type="text" placeholder='First Name' value={form.firstName} onChange={handleInputChange} />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input name="lastName" type="text" placeholder='Last Name' value={form.lastName} onChange={handleInputChange} />
                        </label>
                        <label>
                            <p>Email Address</p>
                            <input name="email" type="text" placeholder='Email Address' value={form.email} onChange={handleInputChange} />
                        </label>
                        <label>
                            <p>Contact Number</p>
                            <input name="contactNo" type="text" placeholder='Contact Number' value={form.contactNo} maxLength={10} onChange={handleInputChange} />
                        </label>
                        <label>
                            <p>Index Number</p>
                            <input name="indexNo" type="number" placeholder='Index number' value={form.indexNo} onChange={handleInputChange} />
                        </label>
                        <div className="submit-btn">
                            <button onClick={handleUserSubmit} type='submit'>Start</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
