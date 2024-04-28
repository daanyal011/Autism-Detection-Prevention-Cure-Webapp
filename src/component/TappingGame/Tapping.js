import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';

function Tapping() {
    const { currentUser } = useContext(AuthContext);

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    const [isPostAdded, setIsPostAdded] = useState(false);

    const [timer, setTimer] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [postData, setPostData] = useState("");

    const [average, setAverage] = useState(0);
    const [timerStarted, settimerStarted] = useState(0);

    const [submitDisabled, setSubmitDisabled] = useState(false);

    const userId = currentUser.uid;
 
    // to Hide past date
    var today = new Date();
    var month,
      day = null;
    if (today.getMonth() < 10 || today.getDate() < 10) {
      month = "0" + (today.getMonth() + 1);
      day = "0" + today.getDate();
    }
    var date = today.getFullYear() + "-" + month + "-" + day;

    useEffect(() => {
      setIsPostAdded(false);
      getPostData(currentUser.email);
    }, [isPostAdded, currentUser]);

    const startTimmer = () => {
      const interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
  
      setTimeout(() => {
        clearInterval(interval);
        setTimer(0);
        setButtonDisabled(true);
      }, 10000);
  
      return () => clearInterval(interval);
    }

    const getPostData = (email) => {
      Axios
      .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`)
      .then((response) => {
        setPostData(response.data);
        var grandTotal = 0;
        Object.entries(response.data).map((item) => {
          grandTotal += item[1].score;
        })
        setAverage(grandTotal/Object.entries(response.data).length);
        // console.log(response);
        if(Object.entries(response.data).length >= 3){
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
      .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`,
        {
          score: count,
          status: count > 50 ? 1 : 0,
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
  };


    const handleButtonClick = () => {
      if(timerStarted == 0){
        startTimmer();
        settimerStarted(1)
      }
      setCount(count => count + 1);
      
    };

    const handleRefreshClick = () => {
        setCount(0);
        window.location.reload();
      };


  
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="border p-4 shadow">
              <h4 className="text-right">Timer: {timer}s</h4>
              <h1 className="text-center my-5">Counter: {count}</h1>
              <button className="btn btn-warning" onClick={handleButtonClick} disabled={buttonDisabled}>Tap Me to start</button>
              <button className="btn btn-danger mx-2" onClick={handleRefreshClick}>Reset</button>
              <button className="btn btn-success" onClick={handleAddPostData} disabled={submitDisabled}>Submit Result</button>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="border p-4 shadow">
          <h4 className="">Score</h4>
          {postData ?
          <table class="table table-striped table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col"><h6>No of Trails</h6></th>
              <th scope="col"><h6>Score</h6></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(postData).map((item, index) => {
              return (
                <tr key={item[1]}>
                  <th scope="row">{index + 1} trail</th>
                  <td>{item[1].score}</td>
                </tr>
              )} ) }
          </tbody>
          <h5 className="mt-4">Average : {(average).toFixed(0)}</h5>
          <h5 className="mt-4">Status : {((average).toFixed(0) >= 50 && (average).toFixed(0) <= 60) ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>} </h5>
        </table>
        : <span className="noTaskAdded p-5">To View Score Play the game</span>}
        </div>
          </div>
        </div>
    </>
    );  
}

export default Tapping;