import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
	const { id } = useParams();

	const [country, setCountry] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const [borderCodes, setBorderCodes] = useState(null);
	const [borderCountries, setBorderCountries] = useState([]);

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/alpha?codes=' + id)
			.then((res) => {
				setBorderCountries([]);
				setCountry(res.data[0]);
				setIsLoading(false);

				setBorderCodes(res.data[0].borders);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
				console.log(err);
			});
	}, [id]);

	useEffect(() => {
		if (borderCodes) {
			borderCodes.map((code) =>
				axios
					.get('https://restcountries.eu/rest/v2/alpha/' + code)
					.then((res) => {
						setBorderCountries((prevArr) => [...prevArr, res.data]);
					})
			);
		}
	}, [borderCodes]);

	return (
		<main className="CountryDetails">
			<div className="countrydetails-wrapper">
				<Link to="/">
					<button className="back-btn">
						<i class="fas fa-long-arrow-alt-left"></i>
						Back
					</button>
				</Link>
				{isLoading && <div>Country details loading...</div>}
				{country && (
					<section className="country-card">
						<figure className="country-flag">
							<img src={country.flag} alt="" />
						</figure>
						<article className="country-text">
							<h2 className="country-name">{country.name}</h2>
							<div>
								<section className="country-info">
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
										{country.subregion
											? country.subregion
											: 'N/A'}
									</p>
									<p>
										<span>Capital: </span>
										{country.capital}
									</p>
								</section>
								<section className="border-countries">
									<div className="border-countries-heading">
										Border countries:
									</div>
									<div className="border-countries-names">
										{borderCountries.length
											? borderCountries.map((country) => (
													<Link
														to={`/details/${country.alpha3Code}`}
													>
														<div>
															{country.name}
														</div>
													</Link>
											  ))
											: 'N/A'}
									</div>
								</section>
							</div>
						</article>
					</section>
				)}
			</div>
		</main>
	);
};

export default CountryDetails;
