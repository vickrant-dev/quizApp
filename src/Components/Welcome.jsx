import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
    });

    const [userData, setUserData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({...prevData, [name]: value}));
    }

    const handleUserSubmit = (e) => {
        e.preventDefault();

        if (form.firstName.trim() === "" || form.lastName.trim() === "") {
            alert("Please fill in all the blanks.");
            return;
        }
        else {
            setUserData(form);
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
                        <div className="submit-btn">
                            <button onClick={handleUserSubmit} type='submit'>Start</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
