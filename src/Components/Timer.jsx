import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function Timer({ onTimeUp, isSubmitted, onTimeElapsed }) {

    const navigate = useNavigate();
    const initialTime = 60 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const startTimeRef =  useRef(Date.now());
    const timerRef = useRef(null);
    
    useEffect(() => {
        if(isSubmitted){
            const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);
            onTimeElapsed(timeTaken);
            return;
        }

        timerRef.current = setInterval(() => {
            const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000)
            const remaining = Math.max(initialTime - elapsedSeconds, 0);

            setTimeLeft(remaining);

            if(remaining <= 0){
                clearInterval(timerRef.current);
                onTimeUp();
            }

        }, 100)

        return () => {
            if (timerRef.current){
                clearInterval(timerRef.current);
            }
        }

    }, [isSubmitted, onTimeUp, onTimeElapsed, initialTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    return(
        <div className='timer-container'>
            <h3>{formatTime(timeLeft)}</h3>
        </div>
    )

}
