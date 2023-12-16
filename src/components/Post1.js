// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
				"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>FRONT END </Card.Title>
				<Card.Text>
                A Front-End Developer is someone who creates websites and web applications.
The difference between Front-End and Back-End is that Front-End refers to how a web page 
looks, while back-end refers to how it works.
You can think of Front-End as client-side and Back-End as server-side.
The basic languages for Front-End Development are HTML, CSS, and JavaScript.
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	);
};

export default Post1;
