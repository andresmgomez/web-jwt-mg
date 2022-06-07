import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import 'antd/dist/antd.css';
import './App.css';

function App() {
	const [token, setToken] = useState('');
	return (
		<div className='App'>
			<header className='App-header'>
				{!token ? <Login setToken={setToken} /> : <Home token={token} />}
			</header>
		</div>
	);
}

export default App;
