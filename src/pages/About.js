import React, { Component } from 'react';
import "./About.css";
import picture from "../assets/picture.jpeg";
  
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
<div className="brief_description"> Hi! My name is Angela. I am a rising junior at Georgia Tech.
  <div> </div>
  <div> I really like art, music, and food. Cooking and painting are my favorite hobbies.</div>
  <div> </div>
  <div>Fun Fact: I recently tried pottery for the first time! </div>
</div> 
</div>
</div>
</div>
</p> 
      </div>
    )
  }
}