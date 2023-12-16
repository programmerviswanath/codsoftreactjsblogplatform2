// Post2.js

import { Card } from "react-bootstrap";

const Post2 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Inheritance</Card.Title>
				<Card.Text>
                The inheritance is an important concept in object-oriented analysis and design. A 
                subclass can inherit structure and behavior from its superclass (or multiple superclasses). 
                The inheritance diagram shows the inheritance hierarchies. The inheritance trees can have multiple
                 levels. For extensive hierarchies, it is recommended to divide them into multiple diagrams.
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post2;
