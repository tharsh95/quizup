import { Button, MenuItem, TextField } from "@material-ui/core";

import React, { useState } from 'react'
import { useHistory } from "react-router";
import Error from "../../Component/Error/Error";
import Categories from "../../Data/categories";
import './home.css'
const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const history = useHistory()
    const handleSubmit = () => {
        if (!name || !category || !difficulty) {
            setError(true)
            return;
        }
        else {
            setError(true)
            fetchQuestions(category,difficulty)
            history.push('/quiz')
        }
    }

    return (
        <div className='content'>
            <div className="settings">
                <span style={{ fontSize: 30, marginBottom:50 }}>Quiz Settings</span>
                <div className="settings_select">
                    {error && <Error>Please Fill all the fields</Error>}
                    <TextField
                        style={{ marginBottom: 25,width:"50vw" }}
                        label="Enter your name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        style={{ marginBottom: 25 }}
                        select
                        label="Select category"
                        variant="outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {Categories.map(cat => (
                            <MenuItem key={cat.value} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select difficulty"
                        variant="outlined"
                        style={{ marginBottom: 25 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Difficult" value="difficult">
                            Difficult
                        </MenuItem>
                    </TextField>
                    <Button onClick={handleSubmit} variant="contained" color="primary">START QUIZ</Button>
                </div>
            </div>
            {/* <img src="./quiz.svg" className="banner" alt="" /> */}
        </div>
    )
}

export default Home
