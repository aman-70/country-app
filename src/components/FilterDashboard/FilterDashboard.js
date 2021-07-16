import { useState, useEffect } from 'react';
import './filterdashboard-styles.css';
import axios from 'axios';
import Card from '../Card/Card';
import { Link, useParams } from 'react-router-dom';

const FilterDashboard = () => {
	const [filterCountries, setFilterCountries] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const { region } = useParams();

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/region/' + region)
			.then((res) => {
				const filterCountriesToShow = res.data;
				setFilterCountries(filterCountriesToShow);

				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err.message);
			});
	});

	return (
		<div className="FilterDashboard">
			<div className="dashboard-wrapper">
				<div className="find-countries">
					<div className="search-box">
						<div>
							<i class="fas fa-search"></i>
							<input
								type="text"
								placeholder="Search for a country..."
							/>
						</div>
					</div>
					<div className="dropdown">
						<button className="dropbtn">
							<p>Filter by Region</p>
							<div>
								<i class="fas fa-chevron-down"></i>
							</div>
						</button>
						<div className="dropdown-content">
							<Link to={`/africa`}>Africa</Link>
							<Link to={`/americas`}>Americas</Link>
							<Link to={`/asia`}>Asia</Link>
							<Link to={`/europe`}>Europe</Link>
							<Link to={`/oceania`}>Oceania</Link>
						</div>
					</div>
				</div>
				<div className="gallery">
					{error && <div>{error}</div>}
					{isLoading && <div>Loading...</div>}
					{filterCountries &&
						filterCountries.map((country) => (
							<Card country={country} />
						))}
				</div>
			</div>
		</div>
	);
};

export default FilterDashboard;
