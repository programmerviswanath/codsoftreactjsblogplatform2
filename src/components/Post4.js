// Post4.js

import { Card } from "react-bootstrap";

const Post4 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Linear Algebra for Machine Learning</Card.Title>
				<Card.Text>
					
                Machine learning has a strong connection with mathematics. Each machine learning algorithm is
                 based on the concepts of mathematics & also with the help of mathematics, one can choose the 
                 correct algorithm by considering training time, complexity, number of features, etc. Linear A
                 lgebra is an essential field of mathematics, 
                which defines the study of vectors, matrices, planes, mapping, and lines required for 
                linear transformation.

The term Linear Algebra was initially introduced in the early 18th 
century to find out the unknowns in Linear equations and solve the equation easily; 
hence it is an important branch of mathematics that helps study data. Also, no one can
 deny that Linear Algebra is undoubtedly the important and primary thing to process the 
 applications of Machine Learning. It is also a prerequisite to start learning Machine 
 Learning and data science.
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post4;
