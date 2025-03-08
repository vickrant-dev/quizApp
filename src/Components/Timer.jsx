import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function Timer({ onTimeUp, isSubmitted }) {

    const navigate = useNavigate();
    const initialTime = 60 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    
    useEffect(() => {
        if(isSubmitted){
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if(prevTime <= 1){
                    clearInterval(timer);
                    onTimeUp();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    }, [isSubmitted, onTimeUp]);

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
