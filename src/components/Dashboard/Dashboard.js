import { useState, useEffect } from 'react';
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
		<main className="Dashboard">
			<div className="dashboard-wrapper">
				<section className="find-countries">
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
							<p onClick={() => setFilterTerm('africa')}>
								Africa
							</p>
							<p onClick={() => setFilterTerm('americas')}>
								Americas
							</p>
							<p onClick={() => setFilterTerm('asia')}>Asia</p>
							<p onClick={() => setFilterTerm('europe')}>
								Europe
							</p>
							<p onClick={() => setFilterTerm('oceania')}>
								Oceania
							</p>
						</div>
					</div>
				</section>
				<section className="gallery">
					{error && <div>{error}</div>}
					{isLoading && <div>Loading...</div>}
					{countries &&
						countries.map((country) => <Card country={country} />)}
				</section>
			</div>
		</main>
	);
};

export default Dashboard;
