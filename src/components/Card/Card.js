import './card-styles.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = (props) => {
	const { country } = props;

	return (
		<div className="Card" id={country.numericCode}>
			<Link
				to={`/details/${country.alpha3Code}`}
				className="card-link"
			>
				<div className="card-image">
					<LazyLoadImage effect="blur" src={country.flag} alt={`${country.name}`+ " flag"} />
				</div>
				<div className="card-body">
					<div>
						<h3 className="card-heading">{country.name}</h3>
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
			</Link>
		</div>
	);
};

export default Card;
