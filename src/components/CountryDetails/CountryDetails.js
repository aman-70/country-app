import './countrydetails-styles.css';

const CountryDetails = () => {
	let publicFolder = process.env.PUBLIC_URL;

	return (
		<div className="CountryDetails">
			<div className="countrydetails-wrapper">
				<button className="back-btn">
					<i class="fas fa-long-arrow-alt-left"></i>
					Back
				</button>
				<div className="country-card">
					<div
						className="country-flag"
						style={{
							backgroundImage: `url("${publicFolder}/images/india-flag.png")`
						}}
					></div>
					<div className="country-text">
						<h2 className="country-name">Belgium</h2>
						<div>
							<div className="country-info">
								<p>
									<span>Native Name: </span>Belgie
								</p>
								<p>
									<span>Population: </span>11,319,511
								</p>
								<p>
									<span>Region: </span>Europe
								</p>
								<p>
									<span>Top Level Domain: </span>.be
								</p>
								<p>
									<span>Currencies: </span>Euro
								</p>
								<p>
									<span>Languages: </span>Dutch, French,
									German
								</p>
								<p>
									<span>Sub region: </span>Western Europe
								</p>
								<p>
									<span>Capital: </span>Brussels
								</p>
							</div>
							<div className="border-countries">
								<div className="border-countries-heading">
									Border countries:
								</div>
								<div className="border-countries-names">
									<div>France</div>
									<div>Germany</div>
									<div>Netherlands</div>
									<div>Germany</div>
									<div>Netherlands</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
