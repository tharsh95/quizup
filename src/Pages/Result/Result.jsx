import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import './result.css'
const Result = ({score}) => {
    const history = useHistory()
    const handleClick=()=>{
        history.push('/')
    }
    return (
        <div className='result'>
            <span className="title">Final Score: {score}</span>
            <Button onClick={handleClick}
            color="primary"
            variant="contained"
            style={{width:450}}
            >
                Return to homepage
            </Button>
        </div>
    )
}

export default Result
