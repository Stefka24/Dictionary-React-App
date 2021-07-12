import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3> {props.meaning.partOfSpeech}</h3>
      <div className="row">
        <div className="col-11">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div>
                  <strong>Definition: </strong>
                  {definition.definition}
                  <Example example={definition.example} />
                  <Synonyms synonyms={definition.synonyms} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
