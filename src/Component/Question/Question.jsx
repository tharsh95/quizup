import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Error from '../Error/Error'
import './question.css'
const Question = ({ currQues, setCurrQues, data, options, correct, score, setScore, setData }) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const history= useHistory()
    const handleCheck = (opt) => {
        setSelected(opt)
        if (opt === correct)
            setScore(score + 1)
        setError(false)


    }
    const handleSelect = (opt) => {
        if (selected === opt && selected === correct)
            return `select`
        else if (selected === opt && selected !== correct)
            return `wrong`
        else if (opt === correct)
            return `select`
    }
    const handleNext = () => {
        if (currQues > 8) {
            history.push("/result");
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else setError("Please select an option first");
    }
    const handleQuit = () =>{
        setCurrQues(0);
        history.push('/')
    }
    return (
        <div className='question'>
            <h1>Question {currQues + 1} </h1>
            <div className="singleQuestion">
                <h2>{data[currQues].question}</h2>
                {error&& <Error>Please select any one option</Error>}
                <div className="options">
                    {options && options.map(opt => (
                        <button
                            onClick={() => handleCheck(opt)}
                            className={`singleOption ${selected && handleSelect(opt)}`}
                            key={opt}
                            disabled={selected}
                        >{opt}</button>
                    ))}
                </div>
                <div className="controls">
                    <Button variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        // href='/'
                        onClick={handleQuit}
                    >Quit</Button>
                    <Button variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Question
