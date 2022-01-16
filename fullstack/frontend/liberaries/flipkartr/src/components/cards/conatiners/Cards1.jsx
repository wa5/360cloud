import { Card, Button } from 'react-bootstrap';
import img1 from '../../../assets/img/1.jpeg';

export default function Card1() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="200px" src={img1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}
