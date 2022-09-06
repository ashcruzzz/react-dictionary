import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="">
        Listen
      </a>
      <h6>{props.phonetic.text}</h6>
    </div>
  );
}
