import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';

function UserCard(props) {
    const { user } = props;

useEffect(() => {
    console.log(user)
},[])

    return (
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.picture.large} />
            <Card.Body>
            <Card.Title>{user.name.first} {user.name.last}</Card.Title>
            {user.showEmail && (
                <Card.Text>
                {user.email}
                </Card.Text>
            )}
            <Button variant="primary" onClick={() => {props.handleClick(user)}}>
                {user.showEmail ? 'Hide Email' : 'Show Email'}
            </Button>
            </Card.Body>
        </Card>
    )
}


export default UserCard;