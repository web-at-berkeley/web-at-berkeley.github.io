import React from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../img/right-nav.png';
import Blobs from '../img/about/partnerships/blobs.png';
import Grotech from '../img/about/partnerships/grotech.png';
import Formula from '../img/about/partnerships/formula.png';
import Cloud from '../img/about/partnerships/cloud.png';
import Tbf from '../img/about/partnerships/tbf.png';
import Stac from '../img/about/partnerships/stac.png';

import '../css/Partnerships.scss';

const Partnerships = () => {
	return (
		<div className="partnerships education">
			<SiteNavbar />
			<Container fluid className="body">
				<img
					src={RightNav}
					alt="right nav"
					className="right-nav selectDisable"
					draggable="false"
				/>
				<img
					src={Blobs}
					alt="blobs"
					className="blobs selectDisable"
					draggable="false"
				/>
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">Giving Back</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center">
						<p className="subtitle">
							As a UC Berkeley-based web organization, students will have the
							opportunity to partner with various clubs on campus. By creating
							websites for these organizations, we aim to provide our students
							with meaningful experiences and preparation for industry-level
							development.
						</p>
						<Contact />
						<hr style={{ width: '60%', borderTop: '2px solid #5F60FF' }} />
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<h3 className="sub-subtitle">Our Partners</h3>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col xs={12} md={4} lg={3} className="text-center partner-col">
						<a
							href="http://cloudatcal.org/"
							title="Cloud at Cal"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Cloud}
								alt="cloud"
								className="partner cloud selectDisable"
								draggable="false"
							/>
						</a>
					</Col>
					<Col xs={12} md={4} lg={3} className="text-center partner-col">
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Formula}
								alt="formula"
								className="partner formula selectDisable"
								draggable="false"
							/>
						</a>
					</Col>
					<Col xs={12} md={4} lg={3} className="text-center partner-col">
						<a
							href="https://www.ocf.berkeley.edu/~grotech/"
							title="GroTech @ Berkeley"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Grotech}
								alt="grotech"
								className="partner grotech selectDisable"
								draggable="false"
							/>
						</a>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} md={4} lg={3} className="text-center partner-col">
						<a
							href="https://stac.berkeley.edu/"
							title="STAC"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Stac}
								alt="STAC"
								className="partner stac selectDisable"
								draggable="false"
							/>
						</a>
					</Col>
					<Col xs={12} md={4} lg={3} className="text-center partner-col">
						<a
							href="https://forum.berkeley.edu/"
							title="TBF"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Tbf}
								alt="TBF"
								className="partner tbf selectDisable"
								draggable="false"
							/>
						</a>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Partnerships;
