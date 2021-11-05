import { useDashboard } from "../context/DashboardContext";
import jeremy from '../images/image-jeremy.png';
const UserInfo = () => {
	const { setTime } = useDashboard();
	return (
			<div className="card-main">
            <div className="card-identity">
                <img src={jeremy} />
                <div className="card-description">
                    <p>card-description for</p>
                    <div className="name">Jeremy Robson</div>
                </div>
            </div>

            <div class="card-menu">
			<div className="card-link" onClick={() => setTime("daily")}>Daily</div>
			<div className="card-link" onClick={() => setTime("weekly")}>Weekly</div>
			<div className="card-link" onClick={() => setTime("monthly")}>Monthly</div>

            </div>
        </div>
			
		
	);
};

export default UserInfo;
