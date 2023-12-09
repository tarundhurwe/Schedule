import "./App.css";
import Calendar from "./components/Calendar";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initAppointment;
  if (localStorage.getItem("schedule") === null) {
    initAppointment = [];
  } else {
    initAppointment = JSON.parse(localStorage.getItem("schedule"));
  }

  const onDelete = (appointment) => {
    setValues(
      values.filter((e) => {
        return e !== appointment;
      })
    );
    localStorage.setItem("schedule", JSON.stringify(appointment));
  };

  const addSchedule = (data) => {
    let sno;
    if (values.length === 0) {
      sno = 1;
    } else {
      sno = values[values.length - 1].sno + 1;
    }
    data.sno = sno;
    const newValues = [...values, data];
    setValues(newValues);
    console.log(newValues);
  };

  const [values, setValues] = useState(initAppointment);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <SideNav />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Dashboard
                addSchedule={addSchedule}
                values={values}
                onDelete={onDelete}
              />
            }
          ></Route>
          <Route exact path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
