import React, { useState, useEffect, useContext, useRef } from "react";
import Axios from "axios";
import { AuthContext } from '../context/Auth';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const Header = () => {
  const tableRef = useRef(null);
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  const [aqData, setAQData] = useState("");
  const [ftData, setFTData] = useState("");
  const [ejData, setEJData] = useState("");
  const [bfData, setBFData] = useState("");
  const [mtData, setMTData] = useState("");
  const [bcData, setBCData] = useState("");

  const [average, setAverage] = useState(0);
  const [mtaverage, setMTAverage] = useState(0);
  const [btaverage, setBTAverage] = useState(0);

  const [alphaAverage, setAlphaAverage] = useState(0);
  const [betaAverage, setBetaAverage] = useState(0);
  const [gammaAverage, setGammaAverage] = useState(0);
  const [deltaAverage, setDeltaAverage] = useState(0);
  const [thethaAverage, setthethaAverage] = useState(0);

  useEffect(() => {
    getAqData(currentUser.email);
    getFTData(currentUser.email);
    getEJData(currentUser.email);
    getBFData(currentUser.email);
    getMTData(currentUser.email);
    getBCData(currentUser.email);
  }, [currentUser]);


  const getAqData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/aqtest/${userId}.json`)
    .then((response) => {
      setAQData(response.data);
    })
    .catch((error) => console.log(error));
  };

  const getFTData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`)
    .then((response) => {
      setFTData(response.data);
      var grandTotal = 0;
      Object.entries(response.data).map((item) => {
        grandTotal += item[1].score;
      })
      setAverage(grandTotal/Object.entries(response.data).length);
    })
    .catch((error) => console.log(error));
  };

  const getEJData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/emojitest/${userId}.json`)
    .then((response) => {
      setEJData(response.data);
    })
    .catch((error) => console.log(error));
  };

  const getBFData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/brainfrequency/${userId}.json`)
    .then((response) => {
      setBFData(response.data);
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
    })
    .catch((error) => console.log(error));
  };

  const getMTData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/memorytest/${userId}.json`)
    .then((response) => {
      setMTData(response.data);
      var grandTotal = 0;
      Object.entries(response.data).map((item) => {
        grandTotal += item[1].total;
      })
      setMTAverage(grandTotal/Object.entries(response.data).length);
    })
    .catch((error) => console.log(error));
  };

  const getBCData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/Balltest/${userId}.json`)
    .then((response) => {
      setBCData(response.data);
      var grandTotal = 0;
        Object.entries(response.data).map((item) => {
          grandTotal += item[1].total;
        })
        setBTAverage(grandTotal/Object.entries(response.data).length);
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="row justify-content-start">
        <div className="col-lg-10">
          <div className="border p-4 shadow">
            <div className="d-flex justify-content-between mb-3">
            <h1 className="mb-4">Patient Name  :  {currentUser.displayName}</h1>
                    <DownloadTableExcel
                      filename="users table"
                      sheet="users"
                      currentTableRef={tableRef.current}
                    >
                   <button className="btn btn-sm btn-success"> Export Result </button>
                </DownloadTableExcel>
            </div>
            {ejData ?
              <table class="table table-striped table-hover table-bordered border-primary" ref={tableRef}>
                <thead>
                <tr>
                  <th colspan="4"><h6>Patient Name  : {currentUser.displayName}</h6></th>
                </tr>
                  <tr>
                    <th scope="col"><h6>Test Type</h6></th>
                    <th scope="col"><h6>Total Score</h6></th>
                    <th scope="col"><h6>Range (Non Autistic)</h6></th>
                    <th scope="col"><h6>Remark</h6></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(aqData).map((item, index) => {
                    return (
                      <tr key={item[1]}>
                        <th scope="row">AQ -10</th>
                        <td>{item[1].score}</td>
                        <td>Less than 7</td>
                        <td>{item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                    )
                  })}
                   {/* {Object.entries(ftData).map((item, index) => { */}
                    {/* return ( */}
                      <tr>
                        <th scope="row">Finger Tapping</th>
                        <td>{(average).toFixed(0)}</td>
                        <td>Between 50 to 60</td>
                        <td>{((average).toFixed(0) >= 50 && (average).toFixed(0) <= 60) ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                    {/* ) */}
                  {/* })} */}
                  {Object.entries(ejData).map((item, index) => {
                    return (
                      <tr key={item[1]}>
                        <th scope="row">Emoji Quiz</th>
                        <td>{item[1].score}</td>
                        <td>More than 4</td>
                        <td>{item[1].status == 1 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                    )} ) }
                       <tr>
                        <th scope="row">Memory test</th>
                        <td>{(mtaverage).toFixed(0)}%</td>
                        <td>More than 70%</td>
                        <td>{ (mtaverage).toFixed(0) >= 70 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th scope="row">Ball Clicker test</th>
                        <td>{(btaverage).toFixed(0)}%</td>
                        <td>More than 70%</td>
                        <td>{ (btaverage).toFixed(0) >= 70 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th colspan="4">Brain Frequency</th>
                      </tr>
                      <tr>
                        <th scope="row">Alpha</th>
                        <td>{(alphaAverage).toFixed(0)}</td>
                        <td>Between 30 to 50</td>
                        <td>{(alphaAverage).toFixed(0) >= 30 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th scope="row">Beta</th>
                        <td>{(betaAverage).toFixed(0)}</td>
                        <td>Between 15 to 30</td>
                        <td>{(betaAverage).toFixed(0) >= 15 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gamma</th>
                        <td>{(gammaAverage).toFixed(0)}</td>
                        <td>Between 5 to 10</td>
                        <td>{(gammaAverage).toFixed(0) >= 5 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th scope="row">Delta</th>
                        <td>{(deltaAverage).toFixed(0)}</td>
                        <td>Between 100 to 200</td>
                        <td>{(deltaAverage).toFixed(0) >= 100 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                      <tr>
                        <th scope="row">Thetha</th>
                        <td>{(thethaAverage).toFixed(0)}</td>
                        <td>Betweem 50 to 100</td>
                        <td>{(thethaAverage).toFixed(0) >= 50 ? <span className="text-success">Non Autistic</span> : <span className="text-danger">Autistic</span>}</td>
                      </tr>
                </tbody>
              </table>
              : <span className="noTaskAdded p-5">To View Score Play the game</span>}
          </div>
        </div>
      </div>
  );
};

export default Header;