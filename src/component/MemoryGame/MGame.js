import React, { useState, useEffect, useContext } from 'react';
import { Box , Typography,Slide } from "@mui/material";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';
import GameBoard from "../../component/MemoryGame/GameBoard/GameBoard";
import Navbar from "../../component/MemoryGame/Navbar/Navbar";
import ScoreBoard from "../../component/MemoryGame/ScoreBoard/ScoreBoard";
import StartButton from "../../component/MemoryGame/StartButton/StartButton";
import ModalMessage from "../../component/MemoryGame/ModalMessage/ModalMessage";
import { DataProvider } from "../../GameContext";
import DataContext from "../../GameContext";
import InstructionsModal from "../../component/MemoryGame/ModalMessage/Instructions";
// import { Box } from '@mui/material';
import ProgressTimer from "./ScoreBoard/ProgressTimer";
import { number } from 'yup';



const MGame = () => {

    const { ResetGame, misses, scores } = useContext(DataContext);
    // console.log(misses);
    // const gameProps = {
    //     previewSeconds: 5,
    //     showPreviewCounter: true,
    //     selectionSeconds: 10,
    //     ResetGame: () => console.log('Reset Game'),
    //     misses: 0,
    //     score: 0
    //   };
      
        // score={score}
    const { currentUser } = useContext(AuthContext);
    const [postData, setPostData] = useState("");
    const userId = currentUser.uid;
    const [isPostAdded, setIsPostAdded] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [resetDisabled, setResetDisabled] = useState(false);
    const [average, setAverage] = useState(0);



    useEffect(() => {
        setIsPostAdded(false);
        getPostData(currentUser.email);
    }, [isPostAdded, currentUser]);

    const getPostData = () => {
        Axios
            .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/memorytest/${userId}.json`)
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

    const handleAddPostData = () => {
        //   check if all input is taken
        //  if user wants to add a new card
        var scores = localStorage.getItem("scores") || 0;
        var misses = localStorage.getItem("misses") || 0;
        console.log(scores);
        // console.log(misses);
        Axios
            .post(`https://fun-games-c4f99-default-rtdb.firebaseio.com/memorytest/${userId}.json`,
                {
                    score: scores,
                    miss: misses,
                    total: scores * 10,
                    totalnumber: 10,
                    // status: score + misses > 10 ? 1 : 0,
                    // status: score > 5 ? 1 : 0,
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


    return (
        <>
            <div className="row justify-content-start">
                <div className="col-lg-8">
                    <div className="border shadow p-4">
                        <DataProvider>
                            {/* <Navbar /> */}
                            {/* <Box container sx={{ display: "flex", flexDirection: 'row', justifyContent: "center", height: "130px" }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", pt: "5px", border: "thin solid rgb(23, 105, 170)", boxShadow: "0 0 10px rgba(23, 105, 170,0.7)", borderRadius: "15px", width: "150px", height: "50px", mt: "25px", }}>
                                    <Typography variant="h4" sx={{ color: "rgb(23, 105, 170)" }}>Score: {score}</Typography>
                                </Box>

                                <Box container sx={{ display: "flex", justifyContent: "center", alignContent: "center", borderRadius: "15px", width: "350px", pt: "5px", height: "100px", mr: "20px", ml: "20px" }}>

                                    <Slide direction="up" in={showPreviewCounter} mountOnEnter unmountOnExit>
                                        <div> <ProgressTimer value={(previewSeconds / (1 + (3 * score)) * 100)} time={previewSeconds} title={"PREVIEW TIME"} customcolor={"rgb(23, 105, 170)"} /> </div>
                                    </Slide>

                                    <Slide direction="down" in={!showPreviewCounter} mountOnEnter unmountOnExit>
                                        <div> <ProgressTimer value={(selectionSeconds / (1 + (5 * score)) * 100)} time={selectionSeconds} title={" SELECTION TIME"} customcolor={"orangered"} /> </div>
                                    </Slide>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", pt: "5px", border: "thin solid rgb(23, 105, 170)", boxShadow: "0 0 10px rgba(23, 105, 170,0.7)", borderRadius: "15px", width: "150px", height: "50px", mt: "25px" }}>
                                    <Typography variant="h4" sx={{ color: "rgb(23, 105, 170)" }}>Miss: {misses}</Typography>
                                </Box>

                            </Box> */}
                            <ScoreBoard />
                            <GameBoard />
                            <StartButton />
                            <ModalMessage />
                            <InstructionsModal />
                        </DataProvider>
                        {/* <Box container sx={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                        <Box  sx={{ display: "flex", justifyContent: "center", alignContent: "center",}}> */}
                        <button className="btn btn-success" onClick={handleAddPostData} disabled={submitDisabled}>Submit Result</button>
                        {/* </Box>
                    </Box>
                    <Box container sx={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                    <Box  sx={{ display: "flex", justifyContent: "center", alignContent: "center",}}> */}
                        {/* <button className="btn btn-success" onClick={ResetGame} disabled={resetDisabled}>Reset</button> */}
                        {/* </Box>
                    </Box> */}
                    </div>
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
                                        <th scope="col"><h6>No of hits</h6></th>
                                        <th scope="col"><h6>No of miss</h6></th>
                                        <th scope="col"><h6>Total</h6></th>
                                        {/* <th scope="col"><h6>Status</h6></th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(postData).map((item, index) => {
                                        return (
                                            <tr key={item[1]}>
                                                <th scope="row">{index + 1}trail</th>
                                                <td>{item[1].totalnumber}</td>
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
        </>
    )
}

export default MGame