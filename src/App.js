import { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import axios from 'axios';

export function Tenor() {
	const { param } = useParams();
  	let [url, setUrl] = useState('');
	useEffect(() => {
		const fetchGif = async () => { // cors-anywhere.herokuapp.com is a CORS proxy
			url = '';
			axios.get(`https://cors-anywhere.herokuapp.com/https://tenor.com/view/${param}`)
			.then(response => {
				const matches = response.data.match(/https:\/\/media\.tenor\.com\/[^/]+\/[^/]+\.gif/g);
				setUrl(matches[0]);
			}).catch(error => {
				console.log(error)
				url = `https://tenor.com/view/${param}`;
			});
		};
		fetchGif();
	}, [param]);

	const func = () => {
		if (url !== '') window.location.replace(url);
	}

	return <script>{func()}</script>;
}
export function Discord() {
	const { param1, param2, param3 } = useParams();
	const url = `https://media.discordapp.net/attachments/${param1}/${param2}/${param3}`;
	return <script>{window.location.replace(url)}</script>;
}