import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
// import { delay } from "@reduxjs/toolkit/dist/utils";

const Brainfrequency = () => {

  const { currentUser } = useContext(AuthContext);

  const [postData, setPostData] = useState("");
    const [isPostAdded, setIsPostAdded] = useState(false);

  const [alphaData, setAlphaData] = useState("");
  const [betaData, setBetaData] = useState("");
  const [gammaData, setGammaData] = useState("");
  const [deltaData, setDeltaData] = useState("");
  const [thethaData, setThethaData] = useState(false);

  // const [formComplete, setFormComplete] = useState(false);
  const [formIncompleteError, setFormIncompleteError] = useState(false);

    const alphaDatas  = React.useRef();
    const betaDatas  = React.useRef();
    const gammaDatas  = React.useRef();
    const deltaDatas  = React.useRef();
    const thethaDatas  = React.useRef();
    
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const [alphaAverage, setAlphaAverage] = useState(0);
    const [betaAverage, setBetaAverage] = useState(0);
    const [gammaAverage, setGammaAverage] = useState(0);
    const [deltaAverage, setDeltaAverage] = useState(0);
    const [thethaAverage, setthethaAverage] = useState(0);


  
  const userId = currentUser.uid;

  useEffect(() => {
    setIsPostAdded(false);
    getPostData(currentUser.email);
  }, [isPostAdded, currentUser]);


const getPostData = (email) => {
  Axios
  .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/brainfrequency/${userId}.json`)
  .then((response) => {
    setPostData(response.data);
    var alphaTotal = 0;
    var betaTotal = 0;
    var gammaTotal = 0;
    var deltaTotal = 0;
    var thethaTotal = 0;
    
    Object.entries(response.data).map((item) => {
      alphaTotal += item[1].alpha;
    })
    setAlphaAverage(alphaTotal/Object.entries(response.data).length);

    Object.entries(response.data).map((item) => {
      betaTotal += item[1].beta;
    })
    setBetaAverage(betaTotal/Object.entries(response.data).length);

    Object.entries(response.data).map((item) => {
      gammaTotal += item[1].gamma;
    })
    setGammaAverage(gammaTotal/Object.entries(response.data).length);

    Object.entries(response.data).map((item) => {
      deltaTotal += item[1].delta;
    })
    setDeltaAverage(deltaTotal/Object.entries(response.data).length);

    Object.entries(response.data).map((item) => {
      thethaTotal += item[1].thetha;
    })
    setthethaAverage(thethaTotal/Object.entries(response.data).length);

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
      if(alphaDatas.current.value.length === 0  || betaDatas.current.value.length === 0  || gammaDatas.current.value.length === 0 ){
        // setFormComplete(false);
        setFormIncompleteError(true);
      } else {
      Axios
      .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/brainfrequency/${userId}.json`,
        {
          alpha: alphaData,
          beta: betaData,
          gamma: gammaData,
          delta: deltaData,
          thetha: thethaData,
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
  };

  return (
    <div className="row justify-content-start">
      <div className="col-lg-4">
        <div className="border shadow p-4">
          <div className="card-body p-4 p-sm-5 ">
            {/* <form> */}
            {formIncompleteError ? <p style={{color : 'red'}}>Kindly complete the form before adding Column</p> : null}
              <div className="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                    value={alphaData}
                    ref={alphaDatas} 
                    max="50"
                    onChange={(event) => {
                    let { value, min, max } = event.target;
                    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                    setAlphaData(value)}}
                  />
                  <label for="alpha">Alpha</label>
                </div>
              </div>
              <div className="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="000.0"
                    value={betaData}
                    ref={betaDatas} 
                    max="30"
                    onChange={(event) => {
                    let { value, min, max } = event.target;
                    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                    setBetaData(value)}}
                  />
                  <label for="Beta">Beta</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex ">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                    value={gammaData}
                    ref={gammaDatas} 
                    max="10"
                    onChange={(event) => {
                    let { value, min, max } = event.target;
                    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                    setGammaData(value)}}
                  />
                  <label for="alpha">Gamma</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex ">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                    value={deltaData}
                    ref={deltaDatas} 
                    max="200"
                    onChange={(event) => {
                    let { value, min, max } = event.target;
                    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                    setDeltaData(value)}}
                  />
                  <label for="alpha">Delta</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                    value={thethaData}
                    ref={thethaDatas} 
                    max="100"
                    onChange={(event) => {
                    let { value, min, max } = event.target;
                    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                    setThethaData(value)}}
                  />
                  <label for="alpha">Thetha</label>
                </div>
              </div>
              {/* <input
                type="button"
                value="Submit"
                className="next-button btn-primary btn"
              /> */}
              <button disabled={submitDisabled} onClick={handleAddPostData} className="btn btn-primary" >Submit</button>
            {/* </form> */}
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="border p-4 shadow">
          <h4 className="mb-3">Score</h4>
          {postData ?
          <>
          <table class="table table-striped table-hover table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">
                  <h6>No of Trails</h6>
                </th>
                <th scope="col">
                  <h6>Alpha</h6>
                </th>
                <th scope="col">
                  <h6>Beta</h6>
                </th>
                <th scope="col">
                  <h6>Gamma</h6>
                </th>
                <th scope="col">
                  <h6>Delta</h6>
                </th>
                <th scope="col">
                  <h6>Thetha</h6>
                </th>
              </tr>
            </thead>
            <tbody>
                {Object.entries(postData).map((item, index) => {
                  return (
                    <tr key={item[1]}>
                      <th scope="row">{index + 1} trail</th>
                      <td>{item[1].alpha}</td>
                      <td>{item[1].beta}</td>
                      <td>{item[1].gamma}</td>
                      <td>{item[1].delta}</td>
                      <td>{item[1].thetha}</td>
                    </tr>
                  )} ) }
              </tbody>
            </table>
            <h4 className="mb-3">Status</h4>
            <table class="table table-striped table-hover table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">
                    <h6>Freq</h6>
                  </th>
                  <th scope="col">
                    <h6>Average</h6>
                  </th>
                  <th scope="col">
                    <h6>status</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">Alpha</th>
                <td> {(alphaAverage).toFixed(0)}</td>
                <td>{(alphaAverage).toFixed(0) >= 30 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
              </tr>
              <tr>
                <th scope="row">Beta</th>
                <td> {(betaAverage).toFixed(0)}</td>
                <td>{(betaAverage).toFixed(0) >= 15 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
              </tr>
              <tr>
                <th scope="row">Gamma</th>
                <td> {(gammaAverage).toFixed(0)}</td>
                <td>{(gammaAverage).toFixed(0) >= 5 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
              </tr>
              <tr>
                <th scope="row">Delta</th>
                <td> {(deltaAverage).toFixed(0)}</td>
                <td>{(deltaAverage).toFixed(0) >= 100 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
              </tr>
              <tr>
                <th scope="row">Thetha</th>
                <td> {(thethaAverage).toFixed(0)}</td>
                <td>{(thethaAverage).toFixed(0) >= 50 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
              </tr>
              </tbody>
            </table>
            </>
            : <span className="noTaskAdded p-5">To View Score Play the game</span>}
        </div>
      </div>
    </div>
  );
};

export default Brainfrequency;
