import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/userContext';
import { quizData } from '../utils/quizData';
import '../App.css'
import { CircleCheckBig } from 'lucide-react';

export default function Results() {

    const navigate = useNavigate();
    const { userData } = useContext(UserContext); 

    useEffect(() => {
        if (localStorage.getItem('quizCompleted') !== "true") {
            navigate('/quizApp'); 
        }
    }, [navigate]);

    const results = localStorage.getItem('quizScore');

    return (
        <>
            <div className="results-container">
                <div className="results">
                    <div className="results-heading">
                        {userData ? (
                            <div>
                                <h3>
                                    You have Successfully Finished the Quiz <CircleCheckBig  className='circle-check' />
                                </h3>
                            </div>
                        ) : 'You Have Successfully Finished the Quiz'}
                    </div>
                    <div className="results-information">
                        <h4>Your Score: 
                            <span>{((results/quizData.length * 100).toFixed(2))}%</span>
                        </h4>
                    </div>
                    <div className="results-email">
                        <p>A copy of your result will be sent to your email: <span>{userData.email}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
