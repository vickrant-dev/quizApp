import React, { useEffect, useState, useContext } from 'react'
import { quizData } from '../utils/quizData'
import { UserContext } from '../utils/userContext';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../App.css'

export default function Quiz() {

    const navigate = useNavigate();
    const { userData } = useContext(UserContext); 

    const [question, setQuestion] = useState(quizData);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerCheck = (e, answer, Qindex) => {

        setUserAnswers({...userAnswers, [Qindex]: answer});
        
        const parent = e.target.parentElement;
        [...parent.children].forEach(child => child.classList.remove("selected"));
        e.target.classList.add("selected");

        console.log(userAnswers);

    }

    const handleSubmit = () => {

        let currentScore = 0;

        if(Object.keys(userAnswers).length < quizData.length){
            alert("Please answer all the questions");
            return;
        }

        quizData.forEach((quizEl, index) => {
            if(userAnswers[index] === quizEl.ans){
                currentScore++;
            }
        });

        setScore(currentScore);

        localStorage.setItem("quizCompleted", "true");
        sendEmail(currentScore);
        navigate('/quizApp/results', {replace: true});
    }

    const handleTimeUp = () => {
        let currentScore = 0;

        quizData.forEach((quizEl, index) => {
            if(userAnswers[index] === quizEl.ans){
                currentScore++;
            }
        });

        setScore(currentScore);

        localStorage.setItem("quizCompleted", "true");
        sendEmail(currentScore);
        navigate('/quizApp/results', {replace: true});
    }

    const sendEmail = (currentScore) => {

        if (userData) {
            
            const templateParams = {
                firstName: userData.firstName + " " + userData.lastName,
                user_email: userData.email,
                message: `You scored ${((currentScore/quizData.length * 100).toFixed(2))}% for your driving license quiz`
            };

            emailjs.send('service_bex1j9e', 'template_rr6vwon', templateParams, 'MTXfNra3PBFPxJVRW')
                .then(
                    (response) => {
                        console.log("Email send successfully", response);
                    },
                    (error) => {
                        console.error("Failed to send email", error);
                    }
                )
            
            localStorage.removeItem('email-sent');

        }
        else {
            console.log("No data found to send email")
        }

    }
    
    useEffect(() => {
        console.log(score); // debugging
        localStorage.setItem("quizScore", score);
    }, [score]);

    return (
        <>
            <div className="quiz">
                <div className="quiz-container">
                    <div className="heading">
                        <h2>Quiz</h2>
                        <Timer onTimeUp={handleTimeUp} isSubmitted={isSubmitted}/>
                    </div>
                    <div className="qa-container">
                        {question.map((q, i) => (
                            <>
                                <div className="q-container">
                                    <p>{i + 1}. {q.question}</p>
                                </div>
                                <div className="a-container">
                                    <li onClick={(e) => handleAnswerCheck(e,1,i)} >{q.option1}</li>
                                    <li onClick={(e) => handleAnswerCheck(e,2,i)} >{q.option2}</li>
                                    <li onClick={(e) => handleAnswerCheck(e,3,i)} >{q.option3}</li>
                                    <li onClick={(e) => handleAnswerCheck(e,4,i)} >{q.option4}</li>
                                </div>
                            </>
                        ))}
                    </div>
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )

}
