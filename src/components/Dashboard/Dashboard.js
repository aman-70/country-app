import { useState, useEffect } from 'react';
import './dashboard-styles.css';
import axios from 'axios';
import Card from '../Card/Card';

const Dashboard = () => {
	const [countries, setCountries] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const [searchTerm, setSearchTerm] = useState('');

	const [filterTerm, setFilterTerm] = useState(null);

	useEffect(() => {
		if (filterTerm) {
			axios
				.get('https://restcountries.eu/rest/v2/region/' + filterTerm)
				.then((res) => {
					const countriesToShow = res.data;
					setCountries(countriesToShow);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		} else {
			axios
				.get('https://restcountries.eu/rest/v2/all')
				.then((res) => {
					const countriesToShow = res.data;
					setCountries(countriesToShow);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}
	}, [filterTerm]);

	useEffect(() => {
		if (searchTerm) {
			axios
				.get('https://restcountries.eu/rest/v2/name/' + searchTerm)
				.then((res) => {
					const countriesToShow = res.data;
					setCountries(countriesToShow);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setCountries(null);
					setIsLoading(false);
					setError('Cannot find the specified country');
				});
		} else {
			axios
				.get('https://restcountries.eu/rest/v2/all')
				.then((res) => {
					const countriesToShow = res.data;
					setCountries(countriesToShow);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}
	}, [searchTerm]);

	return (
		<div className="Dashboard">
			<div className="dashboard-wrapper">
				<div className="find-countries">
					<div className="search-box">
						<i class="fas fa-search"></i>
						<input
							type="text"
							placeholder="Search for a country..."
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="dropdown">
						<button className="dropbtn">
							<p>Filter by Region</p>
							<div>
								<i class="fas fa-chevron-down"></i>
							</div>
						</button>
						<div className="dropdown-content">
							<a onClick={() => setFilterTerm('africa')}>
								Africa
							</a>
							<a onClick={() => setFilterTerm('americas')}>
								Americas
							</a>
							<a onClick={() => setFilterTerm('asia')}>Asia</a>
							<a onClick={() => setFilterTerm('europe')}>
								Europe
							</a>
							<a onClick={() => setFilterTerm('oceania')}>
								Oceania
							</a>
						</div>
					</div>
				</div>
				<div className="gallery">
					{error && <div>{error}</div>}
					{isLoading && <div>Loading...</div>}
					{countries &&
						countries.map((country) => <Card country={country} />)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
