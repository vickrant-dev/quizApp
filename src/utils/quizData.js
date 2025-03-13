import quiz1Image1 from '../assets/road-narrows-ahead.svg'
import quiz1Image2 from '../assets/slippery-road.svg'
import quiz1Image3 from '../assets/road-closed.svg'
import quiz1Image4 from '../assets/single-track-level-crossing.svg'
import quiz1Image5 from '../assets/single-track-level-crossing.svg'

export const quizData = [
    {
        question: "This road sign depicts",
        src: quiz1Image1,
        answers: [
            {text: "Y junction ahead", correct: false},
            {text: "Road narrows ahead", correct: true},
            {text: "Dual carriageway ends ahead",  correct: false},
            {text: "Narrow bridge ahead",  correct: false},
        ]
    },
    {
        question: "This road sign depicts",
        src: quiz1Image2,
        answers: [
            {text: "Slippery road ahead", correct: true},
            {text: "Road with bends ahead", correct: false},
            {text: "Dangerous junction ahead",  correct: false },
            {text: "Road narrows ahead",  correct: false},
        ]
    },
    {
        question: "This road sign depicts",
        src: quiz1Image3,
        answers: [
            {text: "Compulsory roundabout", correct: false},
            {text: "No Entry", correct: false},
            {text: "Road closed for buses and lorries", correct: false},
            {text: "All Vehicles Prohibited", correct: true},
        ]
    },
    {
        question: "This road sign depicts",
        src: quiz1Image4,
        answers: [
            {text: "Road closed ahead", correct: false},
            {text: "Railway crossing ahead", correct: false},
            {text: "Single track level crossing", correct: true},
            {text: "Unprotected railway crossing", correct: false},
        ]
    },
    {
        question: "The driver who enters the T junction depicted in the picture should",
        src: quiz1Image5,
        answers: [
            {text: "Drive ahead if there are no vehicles on the main road", correct: false},
            {text: "Stop immediately", correct: true},
            {text: "Stop only if turning right", correct: false},
            {text: "Stop only if turning left", correct: false},
        ]
    }
]