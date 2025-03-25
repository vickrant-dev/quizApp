import React from 'react'
import Welcome from './Components/Welcome'
import QuizCenter from './Components/QuizCenter'
import QuizCenterTm from './Components/QuizCenterTm'
import Quiz from './Components/Quiz'
import QuizTm from './Components/Quiz-tm'
import Results from './Components/Results'
import ResultsTm from './Components/ResultsTm'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}></Route>
                    <Route path="/quizCenter" element={<QuizCenter/>}></Route>
                    <Route path="/quizCenter-tm" element={<QuizCenterTm/>}></Route>
                    <Route path="/quizCenter/quiz/:quizLink" element={<Quiz/>}></Route>
                    
                    <Route path="/quizCenter-tm/quiz/tm/:quizLink" element={<QuizTm/>}></Route>
                    <Route path="/quizCenter-tm/quiz/tm/:quizLink/results" element={<ResultsTm/>}></Route>
                    
                    <Route path="/quizCenter/quiz/:quizLink/results" element={<Results/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}