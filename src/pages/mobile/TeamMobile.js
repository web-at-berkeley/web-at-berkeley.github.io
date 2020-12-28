import React, { useState } from 'react';

import Navbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';
import MemberModal from '../../components/MemberModal';
import { ExecData, LeadershipData } from '../../data/TeamData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bubbles from '../../img/team/bubbles.png';

import '../css/Team.scss';

const Team = () => {
	const [showMember, setShowMember] = useState(false);

	const handleCloseMember = () => setShowMember(false);
	const handleShowMember = () => setShowMember(true);

	const [data, setData] = useState({});

	const updateExecInfo = (index) => {
		setData(ExecData[index]);
		handleShowMember();
	};

	const updateInfo = (name) => {
		setData(LeadershipData[name]);
		handleShowMember();
	};

	const members = [
		'April',
		'Jessica',
		'Izzie',
		'Cindy',
		'Noor',
		'Arushi',
		'Hector',
		'Emily',
		'Neha',
		'Caelin',
		'Alina',
		'Albert',
		'Ansa',
	];

	return (
		<div className="team team-mobile">
			<Navbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="title-col">
						<h1 className="header">Meet The Team.</h1>
						<p className="subtitle">
							We are a team of UC Berkeley Students who are passionate about
							providing education and support in our community for web
							development. Tap on our photos to learn more about us.
						</p>
					</Col>
				</Row>
				<Row>
					{ExecData.map((person, index) => (
						<Col xs={6} className="image-col" key={person.name}>
							<img
								src={person.image}
								alt={person.name}
								className="team-image"
								draggable="false"
								onClick={() => updateExecInfo(index)}
							/>
						</Col>
					))}

					{members.map((person) => (
						<Col xs={6} className="image-col" key={person}>
							<img
								src={LeadershipData[person].image}
								alt={person}
								className="team-image"
								draggable="false"
								onClick={() => updateInfo(person)}
							/>
						</Col>
					))}

					<img
						src={Bubbles}
						alt="bubbles"
						className="bubbles"
						draggable="false"
					/>
				</Row>
			</Container>

			<MemberModal show={showMember} close={handleCloseMember} data={data} />

			<Footer />
		</div>
	);
};

export default Team;