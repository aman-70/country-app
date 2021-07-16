import './card-styles.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
	let publicFolder = process.env.PUBLIC_URL;
	const { country } = props;

	return (
		<div className="Card" id={country.id}>
			<div className="card-image">
				<img src={country.flag} alt="" />
			</div>
			<div className="card-body">
				<div>
					<Link
						to={`/details/${country.alpha3Code}`}
						className="card-heading"
					>
						<h3>{country.name}</h3>
					</Link>
				</div>
				<div className="card-text">
					<p>
						<span>Population:</span> {country.population}
					</p>
					<p>
						<span>Region:</span> {country.region}
					</p>
					<p>
						<span>Capital:</span>{' '}
						{country.capital ? country.capital : 'N/A'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
