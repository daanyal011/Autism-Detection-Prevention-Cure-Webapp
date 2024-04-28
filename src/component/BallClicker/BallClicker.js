import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
import { blue } from '@mui/material/colors';
import zIndex from '@mui/material/styles/zIndex';

const BallClicker = () => {

  const { currentUser } = useContext(AuthContext);
  const [postData, setPostData] = useState("");
  const userId = currentUser.uid;
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [objectVisible, setObjectVisible] = useState(false);
  const [misses, setMisses] = useState(0);
  const [isPostAdded, setIsPostAdded] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [average, setAverage] = useState(0);

  const [gameOver, setgameOver] = useState(false);


  useEffect(() => {
    setIsPostAdded(false);
    getPostData(currentUser.email);
  }, [isPostAdded, currentUser]);

  const getPostData = () => {
    Axios
      .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/Balltest/${userId}.json`)
      .then((response) => {
        setPostData(response.data);
        var grandTotal = 0;
        Object.entries(response.data).map((item) => {
          grandTotal += item[1].total;
        })
        setAverage(grandTotal/Object.entries(response.data).length);
        // console.log(response);
        if (Object.entries(response.data).length >= 3) {
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
      .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/Balltest/${userId}.json`,
        {
          score: score,
          miss: misses,
          total: score * 10,
          // status: score + misses > 10 ? 1 : 0,
          // status: total > 50 ? 1 : 0,
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



  useEffect(() => {
    const interval = setInterval(() => {

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!objectVisible) {
    setPosition({
      x: Math.floor(Math.random() * (800 - 300 + 1) + 300),
      y: Math.floor(Math.random() * (500 - 300 + 1) + 300)
    });
    setObjectVisible(true);
  }

  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  // const rndInt = randomIntFromInterval(0, 100)
  // console.log(rndInt)

  // function handleGameClick() {
  //   // console.log("thandleGameClickest");
  //   if (objectVisible) {
  //     setScore(score + 1);
  //     setObjectVisible(false);
  //   }
  // };

  // function handleMiss() {
  //   setMisses(misses + 1);
  //   setObjectVisible(false);
  // }

  function handleGameClick() {
    if (objectVisible) {
      setScore(score + 1);
      setObjectVisible(false);
    } else {
      handleMiss();
    }
  };
  
  function handleMiss() {
    setMisses(misses + 1);
    setObjectVisible(false);
  };

  // if (score + misses < 10) {

  // }


  return (
    <>
      {/* <div zindex={-5}> */}
    <div className="row justify-content-start mb-4">
      <div  className="col-lg-7">
        {(score + misses) < 10 ?
      // {console.log(gameOver)}
        <div>
          {objectVisible && <div style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: '50px',
            height: '50px',
            backgroundColor: 'green',
            borderRadius: '50%',
            zIndex: '5'
          }} onClick={handleGameClick}></div>}
          {/* <div className="row justify-content-start my-3"> */}
            {/* <div className="col-lg-7"> */}
              <div className="border shadow p-4" onClick={handleMiss}  style={{ height: "500px" , zIndex: '-5', backgroundColor: "grey" }}>
                </div>
              {/* </div> */}
            {/* </div> */}
        </div> : 
        <div  className="border shadow p-4">
          <h1>game Over</h1>
        </div>
          }
        </div>

        <div className="col-lg-5">
            <div className="border shadow p-4">

              {/* <div onClick={() => {
              handleGameClick();
              // handleMiss();
            }} zindex={5} > */}
              <div >
                <p>
                  Score: 
                  {score}
                </p>
                <p>Misses: 
                  {misses}
                </p>
                <button className="btn btn-success" onClick={handleAddPostData} disabled={submitDisabled}>Submit Result</button>
              </div>
            </div>
            <div className="border p-4 mt-3 shadow">
            <h4 className="">Score</h4>
            {postData ?
              <table class="table table-striped table-hover table-bordered border-primary">
                <thead>
                  <tr>
                    <th scope="col"><h6>No of Trails</h6></th>
                    <th scope="col"><h6>Total Score</h6></th>
                    <th scope="col"><h6>No of Hits Score</h6></th>
                    <th scope="col"><h6>No of Miss</h6></th>
                    <th scope="col"><h6>Accuracy</h6></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(postData).map((item, index) => {
                    return (
                      <tr key={item[1]}>
                        <th scope="row">{index + 1}trail</th>
                        <td>10</td>
                        <td>{item[1].score}</td>
                        <td>{item[1].miss}</td>
                        <td>{item[1].total}%</td>
                        {/* <td>{item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td> */}
                      </tr>
                    )
                  })}
                </tbody>
                <p className="mt-4 d-flex">Average : {(average).toFixed(0)}%</p>
                <p className="mt-4">status : { (average).toFixed(0) >= 70 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</p>
              </table>
              : <span className="noTaskAdded p-5">To View Score Play the game</span>}

          </div>
          </div>
        </div>
      {/* </div > */}


    </>
  )
}

export default BallClicker