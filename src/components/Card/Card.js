import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = (props) => {
	const { country } = props;

	return (
		<main className="Card" data-testid="card">
			<Link
				to={`/details/${country.alpha3Code}`}
				className="card-link"
			>
				<figure className="card-image" data-testid="card-image">
					<LazyLoadImage effect="blur" src={country.flag} alt={`${country.name} 'flag`} />
				</figure>
				<article className="card-body" data-testid="card-body">
					<h3 className="card-heading">{country.name}</h3>
					<div className="card-text" data-testid="card-text">
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
				</article>
			</Link>
		</main>
	);
};

export default Card;
