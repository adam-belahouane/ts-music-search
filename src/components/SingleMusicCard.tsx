import { Card, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router";
import Music from "../interfaces/music"

interface SingleCardProps {
    track : Music
}

const SingleMusicCard = ({ track }: SingleCardProps) => {
    const navigate = useNavigate()
    return(
    

        <Col  sm={6} className="my-2">
        <Card border="secondary">
          <Card.Body>
            <Card.Title>{track.title}</Card.Title>
            <Row> 
                <Col>
                <Card.Text onClick={() => navigate(`/${track.id}`)} >Something</Card.Text>
                </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
    )
}

export default SingleMusicCard