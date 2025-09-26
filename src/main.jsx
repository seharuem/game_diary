import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

const basename = process.env.NODE_ENV === 'production' ? '/game_diary/' : '/';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
