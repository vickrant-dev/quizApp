import { useEffect, useRef, useState } from 'react'
import '../Styles/QuizCenter.css'
import { quizPaper } from '../utils/quizChoice';
import { Timer, NotebookPen, Brain, ChevronRight, Languages } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

export default function App() {
    const navigate = useNavigate();

    const [active, setActive] = useState(false);
    const chooserRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if(chooserRef.current && !chooserRef.current.contains(event.target)){
                setActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [chooserRef]);

    const handleClick = (quizLink) => {
        navigate(`/quizCenter/quiz/${quizLink}`);
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


                <div className="language-chooser">
                    <div className="english checked">
                        <button>English</button>
                    </div>
                    <div onClick={() => navigate('/quizCenter-tm')} className="tamil">
                        <button><strong>தமிழ்</strong></button>
                    </div>
                    <div onClick={() => navigate('/quizCenter-sm')}  className="sinhala">
                        <button><strong>සිංහල</strong></button>
                    </div>
                </div>

                <div className="language-chooser mobile">
                    <div className="chooser-btn" onClick={() => setActive(!active)} >
                        Languages
                    </div>
                    <div className="main-chooser"
                        ref={chooserRef}
                        style={{opacity: active ? '100' : '0', transition: 'all 150ms 0s ease-in-out', transform: active ? 'translateY(-10px)' : 'translateY(0px)'}}
                    >
                        <div className="english checked">
                            <button>English</button>
                        </div>
                        <div onClick={() => navigate('/quizCenter-tm')} className="tamil">
                            <button><strong>தமிழ்</strong></button>
                        </div>
                        <div onClick={() => navigate('/quizCenter-sm')}  className="sinhala">
                            <button><strong>සිංහල</strong></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
