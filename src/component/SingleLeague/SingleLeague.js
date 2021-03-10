import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const SingleLeague = (props) => {
  const { idLeague, strLeague, strSport } = props.league || {};

  return (
    <div className="col-md-3 m-4">
      <Card className="text-center" style={{ width: "18rem", height: "12rem" }}>
        <Card.Body>
          <Card.Title>League Name: {strLeague}</Card.Title>
          <Card.Text>
            <small>sport type: {strSport}</small>
          </Card.Text>
          <Button as={Link} to={`/league/${idLeague}`} variant="primary">
            Explore <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleLeague;
