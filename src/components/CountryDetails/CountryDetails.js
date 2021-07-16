import './countrydetails-styles.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
	let publicFolder = process.env.PUBLIC_URL;
	const { id } = useParams();

	const [country, setCountry] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/alpha?codes=' + id)
			.then((res) => {
				setCountry(res.data[0]);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
				console.log(err);
			});
	}, []);

	return (
		<div className="CountryDetails">
			<div className="countrydetails-wrapper">
				<Link to="/">
					<button className="back-btn">
						<i class="fas fa-long-arrow-alt-left"></i>
						Back
					</button>
				</Link>
				{isLoading && <div>Country details loading...</div>}
				{country && (
					<div className="country-card">
						<div className="country-flag">
							<img src={country.flag} alt="" />
						</div>
						<div className="country-text">
							<h2 className="country-name">{country.name}</h2>
							<div>
								<div className="country-info">
									<p>
										<span>Native Name: </span>
										{country.nativeName}
									</p>
									<p>
										<span>Population: </span>
										{country.population}
									</p>
									<p>
										<span>Region: </span>
										{country.region}
									</p>
									<p>
										<span>Top Level Domain: </span>
										{country.topLevelDomain[0]}
									</p>
									<p>
										<span>Currencies: </span>
										{country.currencies[0].name}
									</p>
									<p>
										<span>Languages: </span>
										{country.languages.map((language) => (
											<p>{language.name}</p>
										))}
									</p>
									<p>
										<span>Sub region: </span>
										{country.subregion}
									</p>
									<p>
										<span>Capital: </span>
										{country.capital}
									</p>
								</div>
								<div className="border-countries">
									<div className="border-countries-heading">
										Border countries:
									</div>
									<div className="border-countries-names">
										{/* {country.borders.map((border) =>
											axios
												.get(
													'https://restcountries.eu/rest/v2/alpha?codes=' +
														border
												)
												.then(<div>{border.name}</div>)
										)} */}

										{country.borders.length ? (
											country.borders.map((country) => (
												<div>{country}</div>
											))
										) : (
											<span>N/A</span>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CountryDetails;
