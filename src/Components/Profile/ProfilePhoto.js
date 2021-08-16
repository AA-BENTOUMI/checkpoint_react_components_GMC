import React from 'react'
import { Card,  } from "react-bootstrap";
import profilePhoto from "./../../assets/profilePhoto.jpg"
function ProfilePhoto() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={profilePhoto} />
        </Card>
      </div>
    );
}

export default ProfilePhoto

