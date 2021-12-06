import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../src/components/homepage/HomePage';
import FreeTime from '../src/components/freetime/FreeTime';
import Form from '../src/components/form/Form';
import Finances from '../src/components/finances/Finances'

function App() {
  const [userName, setUserName] = useState("")
  const [userWorkingHours, setUserWorkingHours] = useState("")
  const [userHourlyWage, setUserHourlyWage] = useState("0")
  const [userMonthlyExpenses, setUserMonthlyExpenses] = useState("0")
  const history = useNavigate()

  // this is just a fun way to get around error saying that Router is defined but never used
  if (Router) {
    console.log('Router is True')
  } else console.log('Router is False')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage history={history}/>
              }
            >
            </Route>
            <Route
              path="/Form"
              element={
                <Form
                  setUserName={setUserName}
                  setUserWorkingHours={setUserWorkingHours}
                  setUserHourlyWage={setUserHourlyWage}
                  setUserMonthlyExpenses={setUserMonthlyExpenses}
                  history={history}
                />
              }>
            </Route>
              <Route
                path="/FreeTime"
                element={
                  <FreeTime
                    userName={userName}
                    userWorkingHours={userWorkingHours}
                    userHourlyWage={userHourlyWage}
                    userMonthlyExpenses={userMonthlyExpenses}
                    history={history}
                  />
                }
              >
            </Route>
            <Route
              path="/Finances"
              element={
                <Finances
                  userWorkingHours={userWorkingHours}
                  userHourlyWage={userHourlyWage}
                  userMonthlyExpenses={userMonthlyExpenses}
                  history={history}
                />
              }
            >
            </Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;
