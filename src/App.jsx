import React from 'react'
import Quiz from './Components/Quiz'
import Results from './Components/Results'
import Welcome from './Components/Welcome'
import QuizCenter from './Components/QuizCenter'
import { BrowserRouter as HashRouter, Router, Routes, Route } from 'react-router-dom'

export default function App() {

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}></Route>
                    <Route path="/quizCenter" element={<QuizCenter/>}></Route>
                    <Route path="/quizCenter/quiz/:quizLink" element={<Quiz/>}></Route>
                    <Route path="/quizCenter/quiz/:quizLink/results" element={<Results/>}></Route>
                </Routes>
            </HashRouter>
        </>
    )

}