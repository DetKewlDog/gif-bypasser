import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function Tenor() {
  	const [url, setUrl] = useState('');
	const { param } = useParams();
	useEffect(() => {
			const fetchGif = async () => { // cors-anywhere.herokuapp.com is a CORS proxy
				axios.get(`https://cors-anywhere.herokuapp.com/https://tenor.com/view/${param}`)
				.then(response => {
					const matches = response.data.match(/https:\/\/media\.tenor\.com\/[^/]+\/[^/]+\.gif/g);
					setUrl(matches[0]);
				}).catch(error => {
					console.error('Error fetching GIF:', error);
				});
			};
			fetchGif();
	}, [param]);

	return <script>{window.location.href = url}</script>;
}
export function Discord() {
	const { param1, param2, param3 } = useParams();
	const url = `https://media.discordapp.net/attachments/${param1}/${param2}/${param3}`;
	return <script>{window.location.href = url}</script>;
}