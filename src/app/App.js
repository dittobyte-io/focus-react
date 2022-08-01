import "app/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Calendar,
	Dashboard,
	Projects,
	Tasks,
	FileManager,
	Signup,
	Login,
} from "pages";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Dashboard />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='/file-manager' element={<FileManager />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
