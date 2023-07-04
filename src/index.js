import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Tenor, Discord } from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path="/https://tenor.com/view/:param" element={<Tenor />} />
			<Route path="/https://media.discordapp.net/attachments/:param1/:param2/:param3" element={<Discord />} />
		</Routes>
	</Router>
);