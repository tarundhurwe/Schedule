// import "./App.css";
// import Calendar from "./components/Calendar";
// import SideNav from "./components/SideNav";
// import Dashboard from "./components/Dashboard";
// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   let initAppointment;
//   if (localStorage.getItem("schedule") === null) {
//     initAppointment = [];
//   } else {
//     initAppointment = JSON.parse(localStorage.getItem("schedule"));
//   }

//   const onEdit = (updatedAppointment) => {
//     let sno = oldAppointment.sno;
//     updatedAppointment.sno = sno;
//     const newValues = [...values, updatedAppointment];
//     setValues(newValues);
//   };

//   const onDelete = (appointment) => {
//     setValues(
//       values.filter((e) => {
//         console.log("deleting");
//         return e !== appointment;
//       })
//     );
//     localStorage.setItem("schedule", JSON.stringify(appointment));
//   };

//   const addSchedule = (data) => {
//     const snoKey = data.hasOwnProperty("sno");
//     if (!snoKey) {
//       let sno;
//       if (values.length === 0) {
//         sno = 1;
//       } else {
//         sno = values[values.length - 1].sno + 1;
//       }
//       data.sno = sno;
//     }
//     const newValues = [...values, data];
//     setValues(newValues);
//   };

//   const [values, setValues] = useState(initAppointment);

//   useEffect(() => {
//     localStorage.setItem("schedule", JSON.stringify(values));
//   }, [values]);

//   return (
//     <>
//       <SideNav />
//       <Router>
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={
//               <Dashboard
//                 addSchedule={addSchedule}
//                 values={values}
//                 onDelete={onDelete}
//               />
//             }
//           ></Route>
//           <Route exact path="/calendar" element={<Calendar />}></Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
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

  const onEdit = (oldAppointment, updatedAppointment) => {
    let sno = oldAppointment.sno;
    updatedAppointment.sno = sno;
    const newValues = [...values, updatedAppointment];
    setValues(newValues);
  };

  const onDelete = (appointment) => {
    setValues(
      values.filter((e) => {
        // console.log("deleting");
        return e !== appointment;
      })
    );
    localStorage.setItem("schedule", JSON.stringify(values));
  };

  const addSchedule = (data) => {
    const snoKey = data.hasOwnProperty("sno");
    if (!snoKey) {
      let sno;
      if (values.length === 0) {
        sno = 1;
      } else {
        sno = values[values.length - 1].sno + 1;
      }
      data.sno = sno;
    }
    const newValues = [...values, data];
    setValues(newValues);
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
                onEdit={onEdit}
              />
            }
          ></Route>
          <Route exact path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
