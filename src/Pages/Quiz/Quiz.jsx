import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Question from '../../Component/Question/Question'
import './quiz.css'
const Quiz = ({name,score,setScore,setData, data }) => {
    const [options, setOptions] = useState([])
    const [currQues, setCurrQues] = useState(0)
    useEffect(() => {
        setOptions(
            data &&
            handleShuffle([
                data[currQues]?.correct_answer,
                ...data[currQues]?.incorrect_answers,
            ])
        );
    }, [data, currQues])

    const handleShuffle = (x) => {
        return x.sort(() => Math.random() - 0.5)
    }
    return (
        <div className="quiz">
            <span className="subtitle">Welcome {name}</span>
            { 
                 data?(
                <>
                <div className="quizInfo">
                    <span>{data[currQues].category}</span>
                    <span>Score: {score}</span>
                </div>
                <Question
                 currQues={currQues}
                 setCurrQues={setCurrQues}
                 data={data}
                 options={options}
                 correct={data[currQues]?.correct_answer}
                 score={score}
                 setScore={setScore}
                 setData={setData}
                />
                </>
                ):( 
                 <CircularProgress style={{margin:100}} 
                 color='inherit'
                 size={150}
                 thickness={1}/>)
             }
        </div>
    )
}

export default Quiz
