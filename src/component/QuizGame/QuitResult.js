import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';

function QuizResult(props) {
  const { currentUser } = useContext(AuthContext);

  const [isPostAdded, setIsPostAdded] = useState(false);

  const [postData, setPostData] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);


  const userId = currentUser.uid;

  useEffect(() => {
    setIsPostAdded(false);
    getPostData(currentUser.email);
  }, [isPostAdded, currentUser]);


  const getPostData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/aqtest/${userId}.json`)
    .then((response) => {
      setPostData(response.data);
      if(Object.entries(response.data).length >= 1){
        setSubmitDisabled(true);
      }
    })
    .catch((error) => console.log(error));
};

// to Add and Edit cardData in DB
const handleAddPostData = () => {
//   check if all input is taken
  //  if user wants to add a new card
    Axios
    .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/aqtest/${userId}.json`,
      {
        score: props.score,
        status: props.score < 6 ? 1 : 0,
        user: currentUser.email,
        Timestamp: new Date().toUTCString(),
      }
    )
      .then((response) => {
        alert("score added succesfully");
        window.location.reload();
        setIsPostAdded(true);
      })
      .catch((error) => console.log("Error" + error));
    }

  return (
    <>
    <div className='show-score'>
        <h2>Your Score: {props.score}</h2>
        <h2> Total Score: {props.totalScore}</h2>
    </div>
    <button className="next-button btn-primary btn me-3" onClick={props.tryAgain}>Try Again</button>
    <button className="btn btn-success" onClick={handleAddPostData} disabled={submitDisabled}>Submit Result</button>

    <div className="border p-4 shadow mt-3">
          <h4 className="">Status</h4>
          {postData ?
            Object.entries(postData).map((item, index) => {
              return (
                <h5 className="mt-4">Status : {item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>} </h5>
              )} ) 
        : <span className="noTaskAdded p-5">To View Score Submit Answer</span>}
        </div>
    </>
  )
}

export default QuizResult