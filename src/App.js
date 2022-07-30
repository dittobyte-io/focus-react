import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar, Dashboard, Projects, Tasks, FileManager } from "pages";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
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
