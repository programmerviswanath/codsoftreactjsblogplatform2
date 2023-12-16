// Post3.js

import { Card } from "react-bootstrap";
const Post3 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Google</Card.Title>
				<Card.Text>
                Google is an internet search engine. It uses a proprietary algorithm that’s designed 
                to retrieve and order search results to provide the most relevant and dependable sources
                 of data possible.Google’s stated mission is to “organize the world’s information and make it 
universally accessible and useful.” It is the top search engine in the world, a position that
 has generated criticism and concern about the power it has to influence the flow of online information.
Google is so dominant that the term “Google” can also be used as a verb, so that when someone 
searches for something on Google, they may say they “Googled” it.
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post3;
