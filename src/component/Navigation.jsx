import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <p onClick={() => navigate(RoutingPath.homeView)}>Home</p>
                <p onClick={() => navigate(RoutingPath.projectView)}>Project</p>
                <p onClick={() => navigate(RoutingPath.aboutView)}>About</p>
                <p onClick={() => navigate(RoutingPath.contactView)}>Contact</p>
            </div>
        </div>
    )
}
