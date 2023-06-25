import "./styles.css";
import React, { useState } from "react";

var title = "Inside Outt";
var color = "white";

var shoppingList = ["milk", "eggs", "breads", "crabs"];

export default function Welcome() {
  var [inputValue, SetInputValue] = useState("");
  var [emojiMeaning, setEmojiMeaning] = useState(
    "translation will appear here.."
  );
  var emojiDictionary = {
    "😊": "Happy",
    "😍": "Smiling with hearts in eyes!!",
    "👌": "Nicee",
    "😁": "He He",
    "😂": "Laughing",
    "😧": "Suprised!!"
  };
  var emojiKeys = Object.keys(emojiDictionary);

  function OnInputChanged(event) {
    SetInputValue(event.target.value);
    var input = event.target.value;
    if (emojiDictionary[input]) {
      setEmojiMeaning(emojiDictionary[input]);
    } else {
      setEmojiMeaning("Not in our database..");
    }
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    if (emojiDictionary[emoji]) {
      setEmojiMeaning(emojiDictionary[emoji]);
    }

    document.getElementById("input-box").value = "";
  }

  return (
    <div className="emojiApp">
      <div className="app-title">
        <h1 id="title">{title}</h1>
      </div>
      <div className="app-body">
        <input
          className="input-box"
          id="input-box"
          onChange={OnInputChanged}
          placeholder="Search your emoji here"
        ></input>
        <h3 id="result">{emojiMeaning}</h3>

        {emojiKeys.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3.5rem" }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
