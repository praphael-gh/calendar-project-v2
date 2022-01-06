import Calendar from "./Calendar"
import "./Sidebar.css"

const Sidebar = ({setSelectedDate, selectedDate, setEventList}) => {

    return (
        <div className="sidebar">
            <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} setEventList={setEventList}/>
        </div>
    )
    
};

export default Sidebar;