import "app/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "features/ui";
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
					<Route path='/' element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/tasks' element={<Tasks />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/file-manager' element={<FileManager />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
