import './dashboard-styles.css';
import Card from '../Card/Card';

const Dashboard = () => {
	return (
		<div className="Dashboard">
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
							<a href="#">Asia</a>
							<a href="#">Africa</a>
							<a href="#">America</a>
							<a href="#">Europe</a>
							<a href="#">Oceania</a>
						</div>
					</div>
				</div>
				<div className="gallery">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
