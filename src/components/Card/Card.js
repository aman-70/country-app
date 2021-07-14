import './card-styles.css';

const Card = () => {
	let publicFolder = process.env.PUBLIC_URL;

	return (
		<div className="Card">
			<div
				className="card-image"
				style={{
					backgroundImage: `url("${publicFolder}/images/india-flag.png")`
				}}
			>
				{/* <img src={`${publicFolder}/images/india-flag.png`} alt="" /> */}
			</div>
			<div className="card-body">
				<div className="card-heading">
					<h3>Germany</h3>
				</div>
				<div className="card-text">
					<p>
						<span>Population:</span> 81,770,900
					</p>
					<p>
						<span>Region:</span> Europe
					</p>
					<p>
						<span>Capital:</span> Berlin
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
