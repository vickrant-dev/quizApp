import React from 'react'
import Quiz from './Components/Quiz'
import Results from './Components/Results'
import Welcome from './Components/Welcome'
import QuizCenter from './Components/QuizCenter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/quizApp" element={<Welcome/>}></Route>
                    <Route path="/quizApp/quizCenter" element={<QuizCenter/>}></Route>
                    <Route path="/quizApp/quizCenter/quiz/:quizLink" element={<Quiz/>}></Route>
                    <Route path="/quizApp/quizCenter/quiz/:quizLink/results" element={<Results/>}></Route>
                </Routes>
            </Router>
        </>
    )

}