import Calendar from "./Calendar"
import "./Sidebar.css"

const Sidebar = ({eventDate}) => {

    return (
        <div className="sidebar">
            <Calendar eventDate={eventDate} />
        </div>
    )
    
};

export default Sidebar;