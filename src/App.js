import "./App.css";
import { DashboardProvider } from "./context/DashboardContext";
import UserInfo from "./components/UserInfo";
import CardList from "./components/CardList";

function App() {
	return (
			
   			
			<DashboardProvider>
				<div className="container">
				<UserInfo />
				<CardList />
				</div>
			</DashboardProvider>
		
	);
}

export default App;
