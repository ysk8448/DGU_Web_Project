import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import { format } from "date-fns";
// import parse from 'date-fns/parse';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Toolbar from './Toolbar';


const events = [
    {
        title: "",
        start: new Date(),
        end : "",
        color: "purple"
    },
]

const Mcalendar = () => {

    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    const [newEvent, setNewEvent] = useState({
      title: "", start: "", end: ""
    })
  
    const [allEvents, setAllEvents] = useState(events)
  
    function handleAddEvent() {
      setAllEvents([...allEvents, newEvent])
    }




  return (
    <div>
        <h1 style={{fontSize: "20pt", fontWeight: "bold"}}>캘린더</h1>
        <h2 style={{fontSize: "15pt"}}>일정 추가</h2>
        <div>
        <input
            type="text"
            placeholder='일정 이름'
            style={{
                width: "20%",
                marginRight: "10px",
                border: "1px solid grey",
                borderRadius: "3px"
            }}
            value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        
        <DatePicker placeholderText='시작일' style={{marginRight: "10px", }}
            selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>

        <DatePicker placeholderText='종료일'
            selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>

        <button style={{
            marginTop: "10px", 
            border: "1px solid grey",
            borderRadius: "50px", 
            padding: "10px"
        }} 
        onClick={handleAddEvent}
        >
            추가
        </button>

        </div>
        <Calendar 
        components={{
        toolbar: Toolbar,
        month: {
            // dateHeader: CustomDateHeader,
        },
        }}
        localizer={localizer} 
        events={allEvents}
        startAccessor="start" 
        endAccessor="end" 
        style={{height: 500, margin: "50px"}}
        views={ Views.MONTH }
        />
    </div>
  );
}


export default Mcalendar