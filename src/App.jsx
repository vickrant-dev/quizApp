import React from 'react'
import Quiz from './Components/Quiz'
import Results from './Components/Results'
import Welcome from './Components/Welcome'
import { UserProvider } from './utils/userContext'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {

    return (
        <>
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/quizApp" element={<Welcome/>}></Route>
                        <Route path="/quizApp/quiz" element={<Quiz/>}></Route>
                        <Route path="/quizApp/results" element={<Results/>}></Route>
                    </Routes>
                </Router>
            </UserProvider>
        </>
    )

}