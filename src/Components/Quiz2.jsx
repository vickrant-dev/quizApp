import React, { useEffect, useState } from 'react'
import { quizData } from '../utils/quizData'
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Quiz() {

    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Temporary fix for all answers being selected. Fix it with a reliable and better way
    const handleNext = () => {
       if (currentQuestion !== quizData.length - 1) {
        document.querySelectorAll(".a-container li").forEach(li => {
            li.classList.remove("correct", "wrong", "disabled");
        })
        setCurrentQuestion(currentQuestion + 1); 
        }
        else {
            handleSubmit();
        }
    }

    const handleAnswerCheck = (e, answer, Qindex) => {

        if(userAnswers[Qindex] !== undefined) return;

        setUserAnswers({...userAnswers, [Qindex]: answer});

        if(quizData[Qindex].ans === answer){
            e.target.classList.add("correct");
            setScore((prevScore) => prevScore + 1);
            console.log("correct answer selected")
        }
        else {
            [...e.target.parentElement.children].forEach((li, i) => {
                if(i === quizData[Qindex].ans - 1){
                    li.classList.add("correct");
                }
            });
            e.target.classList.add("wrong");
        }

        [...e.target.parentElement.children].forEach(li => {
            li.classList.add("disabled");
        })

        console.log(userAnswers);

    }

    const handleSubmit = () => {
        localStorage.setItem("quizCompleted", "true");
        navigate('/quizApp/results', {replace: true});
        console.log(score);
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
        navigate('/quizApp/results', {replace: true});
        
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
                        <div className="q-container">
                            <p>{currentQuestion + 1}. {quizData[currentQuestion].question}</p>
                        </div>
                        <div className="a-container">
                            <li onClick={(e) => handleAnswerCheck(e,1,currentQuestion)} >{quizData[currentQuestion].option1}</li>
                            <li onClick={(e) => handleAnswerCheck(e,2,currentQuestion)} >{quizData[currentQuestion].option2}</li>
                            <li onClick={(e) => handleAnswerCheck(e,3,currentQuestion)} >{quizData[currentQuestion].option3}</li>
                            <li onClick={(e) => handleAnswerCheck(e,4,currentQuestion)} >{quizData[currentQuestion].option4}</li>
                        </div>
                    </div>
                    <button className='submit-btn' onClick={handleNext}>{ currentQuestion === quizData.length - 1 ? "Submit" : "Next" }</button>
                </div>
            </div>
        </>
    )

}
