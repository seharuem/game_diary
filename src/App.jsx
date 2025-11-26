import { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Loading from './pages/Loading';

function App() {
	const [isLoad, setIsLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoad(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AppRoutes />
			{isLoad && <Loading />}
		</>
	);
}

export default App;
