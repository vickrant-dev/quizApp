import { useState } from 'react'
import '../Styles/QuizCenter.css'
import { quizPapersm as quizPaper } from '../utils/sinhala/quizChoicesm';
import { Timer, NotebookPen, Brain, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function QuizCenterSm() {
    const navigate = useNavigate();

    const handleClick = (quizLink) => {
        navigate(`/quizCenter-sm/quiz/sm/${quizLink}`);
    };

    return (
        <>
            <div className="quiz-center-container">
                <div className="quiz-center-header">
                    <div className="header-icon">
                        <Brain size={32} />
                    </div>
                    <h1>ඔබේ ප්‍රශ්නාවලිය තෝරන්න</h1>
                    <p>
                        ඔබේ දැනුම සහ කුසලතා පරීක්ෂා කිරීමට ප්‍රශ්නාවලියක් තෝරන්න.
                    </p>
                </div>

                <div className="quiz-cards-grid">
                    {quizPaper.map((quiz, quizIndex) => (
                        <div className="quiz-card" key={quizIndex}>
                            <div className="quiz-card-content">
                                <div className="quiz-card-badge">{`ප්‍රශ්නාවලිය ${
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
                                        <span>{quiz.duration} මිනිත්තු</span>
                                    </div>
                                    <div className="detail-item">
                                        <NotebookPen
                                            size={18}
                                            className="detail-icon"
                                        />
                                        <span>{quiz.questions} ප්රශ්න</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="quiz-start-button"
                                onClick={() => handleClick(quiz.link)}
                            >
                                <span>ප්‍රශ්නාවලිය ආරම්භ කරන්න</span>
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="language-chooser">
                    <div onClick={() => navigate('/quizCenter')} className="english">
                        <button>English</button>
                    </div>
                    <div onClick={() => navigate('/quizCenter-tm')} className="tamil">
                        <button><strong>தமிழ்</strong></button>
                    </div>
                    <div className="sinhala checked">
                        <button><strong>සිංහල</strong></button>
                    </div>
                </div>

            </div>
        </>
    );
}
