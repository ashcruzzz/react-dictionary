import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <div className="definition">
            {props.meaning.definitions[0].definition}
          </div>

          <div className="example">
            <em>{props.meaning.definitions[0].example}</em>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
