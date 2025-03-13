import { useState } from 'react'
import '../Styles/QuizCenter.css'
import { quizPaper } from '../utils/quizChoice';
import { Timer, NotebookPen, Brain, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

// export default function App() {

//     const navigate = useNavigate();

//     const handleClick = (quizLink) => {
//         navigate(`/quizApp/quizCenter/quiz/${quizLink}`);
//     }

//     return(
//         <>
//             <div className="quiz-choose-container">
//                 <div className="heading">
//                     <h2>Choose Your Quiz</h2>
//                     <p>Select a quiz to test your knowledge</p>
//                 </div>
//                 <div className="quiz-cards">
//                     {quizPaper.map((quiz, quizIndex) => (
//                         <div className="card">
//                             <div className="card-heading">
//                                 <h4>{quiz.title}</h4>
//                             </div>
//                             <div className="card-desc">
//                                 <p>{quiz.description}</p>
//                             </div>
//                             <div className="card-details">
//                                 <div className="time">
//                                     <Timer size={20} className='icon'/> <span>{quiz.duration} mins</span>
//                                 </div>
//                                 <div className="questions">
//                                     <NotebookPen size={20} className='icon'/><span>{quiz.questions} Questions</span>
//                                 </div>
//                             </div>
//                             <button className="start-btn" onClick={() => handleClick(quiz.link)} >Start Quiz</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )

// }

export default function App() {
    const navigate = useNavigate();

    const handleClick = (quizLink) => {
        navigate(`/quizApp/quizCenter/quiz/${quizLink}`);
    };

    return (
        <>
            <div className="quiz-center-container">
                <div className="quiz-center-header">
                    <div className="header-icon">
                        <Brain size={32} />
                    </div>
                    <h1>Choose Your Quiz</h1>
                    <p>
                        Select a quiz category to test your knowledge and skills
                    </p>
                </div>

                <div className="quiz-cards-grid">
                    {quizPaper.map((quiz, quizIndex) => (
                        <div className="quiz-card" key={quizIndex}>
                            <div className="quiz-card-content">
                                <div className="quiz-card-badge">{`Quiz ${
                                    quizIndex + 1
                                }`}</div>
                                <h3 className="quiz-card-title">
                                    {quiz.title}
                                </h3>
                                <p className="quiz-card-description">
                                    {quiz.description}
                                </p>

                                <div className="quiz-card-details">
                                    <div className="detail-item">
                                        <Timer
                                            size={18}
                                            className="detail-icon"
                                        />
                                        <span>{quiz.duration} mins</span>
                                    </div>
                                    <div className="detail-item">
                                        <NotebookPen
                                            size={18}
                                            className="detail-icon"
                                        />
                                        <span>{quiz.questions} Questions</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="quiz-start-button"
                                onClick={() => handleClick(quiz.link)}
                            >
                                <span>Start Quiz</span>
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
