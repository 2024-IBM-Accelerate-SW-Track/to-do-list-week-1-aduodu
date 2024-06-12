import React, { Component } from 'react';
import "./About.css";
import picture from "../assets/picture.jpeg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
<div className="split left">
<div className="centered">
<img 
className="profile_image" src={picture}
alt="Profile Pic"
></img>
</div>
</div>
<div className="split right">
<div className="centered">
<div className="name_title">Angela</div>
<div className="brief_description"> Hi! You probably already saw the card above, but I'm Angela; a rising junior at Georgia Tech. <br />
  <div> <br /> I really like art, music, and food. Cooking and painting are my favorite hobbies.</div>
  <div> <br /> Fun Fact: I recently tried pottery for the first time! </div>
</div> 
</div>
</div>
</div>
<Card> 
<CardContent> Hi, my name is Angela! Welcome to my About Page! </CardContent>
</Card>


<Stack direction="column" spacing={90} sx={{ position: 'absolute', top: '83%', left: '25%', transform: 'translate(-20%, -20%)' }}>
<div> 
  <Chip label="Linkedin" component="a" href="https://www.linkedin.com/in/aduodu/" clickable />
</div>
</Stack>

</p> 
      </div>
    )
  }
}