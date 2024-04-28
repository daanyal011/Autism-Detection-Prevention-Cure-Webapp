import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
import { EmojiData } from "./EmojiData";
import EmojiResult from "./EmojiResult";
import "./Emoji.css";

function EmojiGame() {
  const [currentImage, setCurrentImage] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeImage = () => {
    updateScore();
    if (currentImage < EmojiData.length - 1) {
      setCurrentImage(currentImage + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === EmojiData[currentImage].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentImage(0);
    setClickedOption(0);
    setScore(0);
  };

  const { currentUser } = useContext(AuthContext);

  const [postData, setPostData] = useState("");

  const userId = currentUser.uid;

  useEffect(() => {
    getPostData(currentUser.email);
  }, [currentUser]);


  const getPostData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/emojitest/${userId}.json`)
    .then((response) => {
      setPostData(response.data);
    })
    .catch((error) => console.log(error));
};

  return (
    <div className="row justify-content-start">
      <div className="col-lg-8">
    {/* <div className="Quit-1"> */}
      {/* <div className="card"> */}
        <div className="border shadow p-4">
          {showResult ? (
          <EmojiResult
            score={score}
            totalScore={EmojiData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
          <p class="card-text question">
              <img className="emoji-list" src={EmojiData[currentImage].image}/>
        </p>
          <div className="option-container">
            <ul className="list-option">
              {EmojiData[currentImage].options.map((option, i) => {
                return (
                <li className="list-group mb-2">
                  <button
                    // className="option-btn"
                    className={`list-group-item list-group-item-action btn-primary btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                  </li>
                );
              })}
              </ul>
            </div>
            <input
              type="button"
              value="Next"
              className="next-button btn-primary btn"
              onClick={changeImage}
            />
            </>
          )}
          </div>
      {/* </div> */}
    {/* </div> */}
    </div>
    <div className="col-lg-4">
    <div className="border p-4 shadow">
          <h4 className="">Score</h4>
          {postData ?
          <table class="table table-striped table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col"><h6>No of Trails</h6></th>
              <th scope="col"><h6>Total Score</h6></th>
              <th scope="col"><h6>Your Score</h6></th>
              <th scope="col"><h6>Status</h6></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(postData).map((item, index) => {
              return (
                <tr key={item[1]}>
                  <th scope="row">{index + 1} trail</th>
                  <td>8</td>
                  <td>{item[1].score}</td>
                  <td>{item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                </tr>
              )} ) }
          </tbody>
        </table>
        : <span className="noTaskAdded p-5">To View Score Play the game</span>}
        </div>
    </div>
    </div>
  );
}

export default EmojiGame;
