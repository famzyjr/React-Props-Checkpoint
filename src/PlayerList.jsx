import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import record from './Player_detail.json';
function PlayerList(props) {
  const rec = props.rec;

  return (
    <div>
      {rec.map((record) => (
        <div style={{margin:"20px",}}   key={record.id}  >
          <div>
          <Card style={{ width: "28rem",}}>
            <Card.Img variant="top" src={record.URL} />
            <Card.Body>
              <Card.Title style={{fontFamily:"monspace", marginLeft:"120px" }} >Name: {record.name}</Card.Title>
              <Card.Text style={{fontFamily:"monspace", marginLeft:"165px" }} >Team: {record.team}</Card.Text>
              <Card.Text style={{fontFamily:"monspace", marginLeft:"150px" }} >Nameationality: {record.nationality}</Card.Text>
               <Card.Text style={{fontFamily:"monspace", marginLeft:"160px" }} >JerseyNumber: {record.jerseyNumber}</Card.Text>
              <Card.Text style={{fontFamily:"monspace",  marginLeft:"170px"  }} >Age: {record.age}</Card.Text>
              <Button style={{fontFamily:"monspace", marginLeft:"150px" }}  variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
