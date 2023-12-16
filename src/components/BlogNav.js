// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				// backgroundColor:"#A3C1D4"
                backgroundColor:"magenta"
			}}>
				{/* <img
			src='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
			height='30'
			alt=''
			loading='lazy'
			/> */}
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>FeelFreeToLearnTechnology</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Front End
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							Inheritance
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
						    Google
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Linear Algebra for Machine Learning
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
