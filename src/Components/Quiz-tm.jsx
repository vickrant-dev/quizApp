import React, { useEffect, useState } from 'react'
import { quizDatatm as quiz1Datatm } from '../utils/tamil/quizDatatm'
import { quiz2Datatm } from '../utils/tamil/quiz2Datatm'
import { quiz3Datatm } from '../utils/tamil/quiz3Datatm'
import { quiz4Datatm } from '../utils/tamil/quiz4Datatm'
import Timer from './Timer';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'


export default function QuizTm() {

    const navigate = useNavigate();

    const { quizLink } = useParams();

    const quizDataMap = {
        1: quiz1Datatm,
        2: quiz2Datatm,
        3: quiz3Datatm,
        4: quiz4Datatm,
    }

    const quizData = quizDataMap[quizLink] || quiz1Data;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [usersAnswers, setUsersAnswers] = useState({});
    const [score, setScore] = useState(0);

    const [timeTaken, setTimeTaken] = useState(0);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerCheck = (e, ans, i) => {

        if(ans.correct){
            setUsersAnswers({...usersAnswers, [currentQuestion]: i});
            setScore((prevScore) => prevScore + 1);
            e.target.classList.add("correct");
        }
        else{
            setUsersAnswers({...usersAnswers, [currentQuestion]: i});

            e.target.classList.add("wrong");
            [...e.target.parentElement.children].forEach(el => {
                if(el.dataset.isCorrect === "true"){
                    el.classList.add("correct");
                }
            })
        }

        [...e.target.parentElement.children].forEach(el => {
            el.classList.add("disabled");
        })

    }

    const handleNext = () => {
        if (currentQuestion !== quizData.length - 1) {
            if(usersAnswers[currentQuestion] !== undefined){
                document.querySelectorAll(".a-container li").forEach(li => {
                    li.classList.remove("correct", "wrong", "disabled");
                })
                setCurrentQuestion(currentQuestion + 1); 
            }
            else{
                alert("Please answer the current question before proceeding.")
            }
        }
    }

    const handleBack = () => {
        if (currentQuestion > 0) {
            document.querySelectorAll(".a-container li").forEach((li) => {
              li.classList.remove("correct", "wrong", "disabled")
            })
      
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleSubmit = () => {
        setIsSubmitted(true);
        localStorage.setItem("quizCompleted", "true");
        localStorage.setItem("quizScore", score);
        navigate(`/quizCenter-tm/quiz/tm/${quizLink}/results`, {replace: true});
    }

    const handleTimeUp = () => {
    
        let currentScore = 0;


        quizData.forEach((quizEl, index) => {
            if(usersAnswers[index] === undefined) {
                return;
            }
            else if(usersAnswers[index] === quizEl.ans){
                console.log(usersAnswers);
                currentScore++;
            }
        });

        setScore(currentScore);

        setIsSubmitted(true);

        localStorage.setItem("quizCompleted", "true");
        localStorage.setItem("quizScore", currentScore);
        navigate(`/quizCenter-tm/quiz/tm/${quizLink}/results`, {replace: true});
            
    }

    const handleTimeElapsed = (time) => {
        setTimeTaken(time);
        localStorage.setItem("time-taken", time);
    }

    useEffect(() => {

        if(currentQuestion in usersAnswers) {
            const answerIndex = usersAnswers[currentQuestion];
            const answerElements = document.querySelectorAll(".a-container li");

            answerElements.forEach((el, elIndex) => {

                el.classList.add("disabled");

                if(elIndex === answerIndex) {
                    if(el.dataset.isCorrect === "true"){
                        el.classList.add("correct");
                    }
                    else{
                        el.classList.add("wrong");

                        answerElements.forEach(ansEl => {
                            if(ansEl.dataset.isCorrect === 'true'){
                                ansEl.classList.add("correct");
                            }
                        })

                    }
                }
                
            })
        }

    }, [currentQuestion, usersAnswers]);

     return (
            <>
                <div className="quiz">
                    <div className="quiz-container">
                        <div className="heading">
                            <h2 style={{fontSize:"30px"}} >வினாடி வினா</h2>
                            <Timer onTimeUp={handleTimeUp} isSubmitted={isSubmitted} onTimeElapsed={handleTimeElapsed} />
                        </div>
                        <div className="qa-container">
                            <div className="img-container"
                            style={{display: quizData[currentQuestion].src ? 'flex' : 'none'}}
                            >
                                <img src={quizData[currentQuestion].src ? quizData[currentQuestion].src : '' } width={quizData[currentQuestion].src ? 130 : 0} alt={quizData[currentQuestion].src ? 'quizImage' : ''} />
                            </div>
                            <div className="q-container">
                                <p>{currentQuestion + 1}. {quizData[currentQuestion].question}</p>
                            </div>
                            <div className="a-container">
                                {quizData[currentQuestion].answers.map((answer, index) => (
                                    <li key={index} onClick={(e) => handleAnswerCheck(e, answer, index)} data-is-correct={`${answer.correct}`} >{answer.text}</li>
                                ))}
                            </div>
                        </div>
                        <div className="back-next">
                            <button onClick={handleBack} className={ currentQuestion > 0 ? "back-btn active" : "back-btn" } >{currentQuestion > 0 ? "Back" : ""}</button>
                            <button onClick={currentQuestion === quizData.length - 1 ? handleSubmit : handleNext} className='next-btn' >{currentQuestion === quizData.length - 1 ? "Submit" : "Next"}</button>
                        </div>
                    </div>
                </div>
            </>
        )

}