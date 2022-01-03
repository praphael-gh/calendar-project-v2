import Calendar from "./Calendar"
import "./Sidebar.css"

const Sidebar = ({setSelectedDate, selectedDate}) => {

    return (
        <div className="sidebar">
            <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        </div>
    )
    
};

export default Sidebar;