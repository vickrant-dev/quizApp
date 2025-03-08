import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../utils/quizData';
import '../App.css'
import { CircleCheckBig } from 'lucide-react';

export default function Results() {

    const navigate = useNavigate();

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
                        <div>
                            <h3>
                                You have Successfully Finished the Quiz <CircleCheckBig  className='circle-check' />
                            </h3>
                        </div>
                    </div>
                    <div className="results-information">
                        <h4>Your Score: 
                            <span>{((results/quizData.length * 100).toFixed(2))}%</span>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
