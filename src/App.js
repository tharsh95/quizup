import axios from 'axios';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  const [name, setName] = useState("")
  const [data, setData] = useState()
  const [score, setScore] = useState(0)
  const fetchQuestions = async (category, difficulty) => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    setData(data.results)
  }
  return (<>
    <div className="app" style={{ backgroundImage: 'url("/back.jpg")' }}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
        </Route>
        <Route path='/quiz' exact>
          <Quiz data={data} name={name} score={score} setData={setData} setScore={setScore}/>
        </Route>
        <Route path='/result' exact>
          <Result score={score} />
        </Route>
        <Route>
          <NotFound/>
        </Route>

      </Switch>
    </div>
    <Footer />
  </>
  );
}

export default App;
