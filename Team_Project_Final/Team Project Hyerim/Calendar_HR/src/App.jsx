// import './App.css'
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import Scalendar from './assets/Scalendar';
// import { format } from "date-fns";
// import { useState } from "react";
// // import format from 'date-fns/format';
// // import parse from 'date-fns/parse';
// // import startOfWeek from 'date-fns/startOfWeek';
// // import getDay from 'date-fns/getDay';
// // import 'react-big-calendar/lib/css/react-big-calendar.css';
// // import React, {useState} from 'react';
// // import DatePicker from 'react-datepicker';


// // const locales = {
// //   "ko-KR": require("data-fns/locale/ko-KR")
// // };
// // const localizer



// const App = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const handleSetToday = () => setCurrentDate(new Date());

//   return (
//     <div className="mt-16 flex flex-col items-center gap-8">
//     <div className="flex flex-col items-center gap-2">
//       <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>

//       <button onClick={handleSetToday} className="text-sm px-4 py-1 rounded text-white bg-blue-600 
//       hover:bg-blue-700 active:bg-blue-800">Today</button>
//     </div>

//     <Scalendar value={currentDate} onChange={setCurrentDate} />
//     </div>
//   )
// }

// export default App

import './App.css';
import fetchAchievementData from './chart';
import { TodoWrapper } from './components/TodoWrapper';
import Mcalendar from './Mcalendar';

function App() {
  return (
    
    <div className="App">
      <div className ='upeer-calendar'> upp</div>
      <Mcalendar />
      <div className='calendar-wrapper-margin'></div>

      <TodoWrapper  />
      
      <div className='todo-stat-margin'></div>

      <fetchAchievementData />      
    </div>

    
  );
}

export default App;
