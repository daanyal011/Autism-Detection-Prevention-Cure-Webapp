import { Box, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container from '@mui/material/Container';
import './PersonalHistory.css'

const PersonalHistory = () => {

	return (
		<div className="app">
			<Sidebar sx={{
				height: 800
			}} />
			<main className='content'>
				<Topbar />
				<Box sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					// alignItems: 'center',
				}}>
					<Typography
						variant="h2"
						// color={colors.grey[100]}
						fontWeight="bold"
						sx={{ m: "5px 25px" }}
					>
						Personal History
					</Typography>
					<Typography variant="h5"
						sx={{ m: "0px 25px" }} >
						Form
					</Typography>
					<Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
						<div className="row">
							<div className="col-lg-12">
								<div className="d-flex justify-content-center align-items-center">
									<div className="login-card1 container">
										<div className="border border-3 border-primary"></div>
										{/* <div className="card bg-white"> */}
										<div className="border shadow p-5">
											<p id="form-head">Developmental History Form</p>
											<form className="row g-3">
												<div className="col-md-6">
													<label for="date" className="form-label">Date Form Completed:</label>
													<input type="date" className="form-control" id="date" placeholder="" />
												</div>
												<div className="col-md-6">
													<label for="name" className="form-label">Person Completing the Form:</label>
													<input type="name" className="form-control" id="name"
														placeholder="Name and relationship to client" />
												</div>
												<div className="col-md-6">
													<label for="name" className="form-label">Client’s Name:</label>
													<input type="name" className="form-control" id="name" placeholder="Name" />
												</div>
												<div className="col-md-2">
													<label for="Birth-date" className="form-label">Birth of Date</label>
													<input type="date" className="form-control" id="contact-no" placeholder="" />
												</div>
												<div className="col-4">
													<label for="medicalissue" className="form-label">Sex</label>
													<div className="form-click">
														<input className="form-click-input" type="checkbox" id="lickYes" />
														<label for="form-click-label">Male</label>
														{/* <!-- </div> --> */}
														{/* <!-- <div className="form-click"> --> */}
														<input className="form-click-input" type="checkbox" id="gridClickNo" />
														<label for="form-click-label">Female</label>
													</div>
												</div>
												<div className="col-12">
													<label for="Address" className="form-label">Address</label>
													<input type="text" className="form-control" id="Address2"
														placeholder="Apartment, studio, or floor" />
												</div>
												<div className="col-md-2">
													<label for="Age" className="form-label">Age</label>
													<input type="number" className="form-control" id="Age" />
												</div>
												<div className="col-md-2">
													<label for="Weight" className="form-label">Weight</label>
													<input id="number" className="form-control" />
												</div>
												<div className="col-md-2">
													<label for="Height" className="form-label">Height</label>
													<input type="number" className="form-control" id="number" />
												</div>
												<br />
												{/* <!-- <div className="col-md-4">
                                        <div className="form-check" id="option-1">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Breathing Problems 	&#40;requiring		&#41;
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Placment in an incubator
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Significant muscle weakness or paralysis
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Poor muscle tone
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Seizures
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Feeding difficulties
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Excessive sensitivity to noise/stimulation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Jaundice treated with lights
        
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Infection
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" for="Breath" id="gridLabel">
                                                Surgery	&#40;Describe		&#41;
                                            </label>
                                        </div>
                                    </div> --> */}
												<p id="rfe">REASONS FOR EVALUATION</p>

												<div className="col-md-12">
													<p>Please list the reason	&#40;s		&#41; the client is being referred for the evaluation:
													</p>
													<ol className="ullist" type="1">
														<li
															className="input1">
															<u><input type="text" className="form-control" /></u>
														</li>
														<li
															className="input1">
															<u><input type="text" className="form-control" /></u>
														</li>
														<li
															className="input1">
															<u><input type="text" className="form-control" /></u>
														</li>
													</ol>
												</div>


												<div className="col-md-12">
													<p id="problem-begins-head">Did these problems begin?</p>
													<textarea name="text" id="problem-begins" cols="30" rows="5"
														className="form-control"></textarea>
												</div>

												<div className="col-md-12">
													<p>Are you goals for this evaluation?</p>
													<textarea name="text" id="goals-evaluation" cols="30" rows="5"
														className="form-control"></textarea>
												</div>

												<div className="col-12">
													<label>Has the client ever received the diagnosis of an autism spectru
														disorder?</label>
													<input className="form-click-input" type="checkbox" id="lickYes" />
													<label for="form-click-label">Yes</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">No</label>
												</div>

												<div className="col-md-4">
													<label for="date" className="form-label">If yes, in what month & year </label>
													<input type="date" id="date" className="form-control" />
													<br />
													<label for="name" className="form-label"> And by whom </label>
													<input type="text" className="form-control" />
												</div>

												<p id="fi">FAMILY INFORMATION</p>

												<div className="col-md-5">
													<label for="text">Mother/Guardian Name:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<label for="text">Education:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>



												<div className="col-md-5">
													<label for="text">Occupation:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<input id="ocupation-check" className="form-click-input" type="checkbox" />
													<label for="form-click-label">Full-time</label>
													<input id="ocupation-check" className="form-click-input" type="checkbox" />
													<label for="form-click-label">Part-time</label>
												</div>

												<div className="row-md-4"></div>
												<div className="col-md-5">
													<label for="text">Father/Guardian Name:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<label for="text">Education:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>



												<div className="col-md-5">
													<label for="text">Occupation:</label>
													<input type="text" name="" id="" className="form-control" />
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<input id="ocupation-check" className="form-click-input" type="checkbox"
													/>
													<label for="form-click-label">Full-time</label>
													<input id="ocupation-check" className="form-click-input" type="checkbox" />
													<label for="form-click-label">Part-time</label>
												</div>

												<div className="col-md-5">
													<p>Parents are:</p>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Married
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Unmarried, Living Together
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Never Married, Living Together
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Separated
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Divorced
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Mother Deceased
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Father Deceased
														</label>
													</div>
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<p>Child lives with:</p>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Biological Mother
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Biological Father
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Step-parent
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Adoptive Parent 	&#40;specify		&#41;
														</label>
														<input type="text" />
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Grandparent
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Legal Guardian 	&#40;specify		&#41;
														</label>
														<input type="text" />
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Other 	&#40;specify		&#41;
														</label>
														<input type="text" />
													</div>
												</div>

												<p id="si">Sibling Information</p>

												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">#</th>
															<th scope="col">Name of sibling</th>
															<th scope="col-xs-2">Sex</th>
															<th scope="col">Age</th>
															<th scope="col">Different Father?</th>
															<th scope="col">Different Mother?</th>
															<th scope="col">List any health/behavior/ learning problems</th>
															<th scope="col">Lives with child?</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td><input type="name" className="form-control" size="40" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td><input type="name" className="form-control" /></td>
															<td><input type="name" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td><input type="name" className="form-control" size="40" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td><input type="name" className="form-control" /></td>
															<td><input type="name" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td><input type="name" className="form-control" size="40" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
														</tr>
														<tr>
															<th scope="row">4</th>
															<td><input type="name" className="form-control" /></td>
															<td><input type="name" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td><input type="name" className="form-control" size="40" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
														</tr>
														<tr>
															<th scope="row">5</th>
															<td><input type="name" className="form-control" /></td>
															<td><input type="name" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
															<td><input type="name" className="form-control" size="40" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	Y
																</label>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
																<label className="form-check-label" for="Breath" id="gridLabel">
																	N
																</label>
															</td>
														</tr>
													</tbody>
												</table>

												<div className="col-12">
													<label for="medicalissue" className="form-label">How well does your child get along
														with his/her siblings?</label>
													<div className="form-click">
														<input className="form-click-input" type="checkbox" id="lickYes" />
														<label id="si-checkbox" for="form-click-label">Very Well</label>
														<input className="form-click-input" type="checkbox" id="gridClickNo" />
														<label id="si-checkbox" for="form-click-label">Good</label>
														<input className="form-click-input" type="checkbox" id="gridClickNo" />
														<label id="si-checkbox" for="form-click-label">Average</label>
														<input className="form-click-input" type="checkbox" id="gridClickNo" />
														<label id="si-checkbox" for="form-click-label">Fair</label>
														<input className="form-click-input" type="checkbox" id="gridClickNo" />
														<label for="form-click-label">Poor</label>
													</div>
												</div>
												<div className="col-12"></div>

												<div className="col-12">
													<label>Is English the client's primary speaking language?</label>
													<input className="form-click-input" type="checkbox" id="lickYes" />
													<label for="form-click-label">Yes</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">No</label>
												</div>


												<div className="col-12"></div>


												<div className="form-group row">
													<label for="inputEmail3" className="col-sm-4 col-form-label">If no, what is the
														client's
														primary language:</label>
													<div className="col-sm-8">
														<input type="text" className="form-control" id="inputtext" />
													</div>
												</div>


												<div className="col-12"></div>


												<div className="form-group row">
													<label for="inputEmail3" className="col-sm-4 col-form-label">What is the client's
														secondary
														language:</label>
													<div className="col-sm-8">
														<input type="text" className="form-control" id="inputtext" />
													</div>
												</div>



												<p id="ccd">Child Care and Discipline</p>
												<div className="col-12">
													<label>Who is primarily responsible for the client's care?</label>
													<input className="form-click-input" type="checkbox" id="lickYes" />
													<label for="form-click-label">Mother</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Father</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Both</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Other:</label>
													<input type="text" />
												</div>
												<div className="col-12">
													<label>Who is mainly in charge of discipline in the home?</label>
													<input className="form-click-input" type="checkbox" id="lickYes" />
													<label for="form-click-label">Mother</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Father</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Both</label>
													<input className="form-click-input" type="checkbox" id="gridClickNo" />
													<label for="form-click-label">Other:</label>
													<input type="text" />
												</div>
												<div className="col-md-12">
													<p>Please describe discipline techniques:</p>
													<textarea name="text" id="goals-evaluation" cols="30" rows="2"
														className="form-control"></textarea>
												</div>

												<p id="fph">FAMILY PSYCHIATRIC HISTORY</p>

												<table className="table table-striped table-bordered">
													<thead>
														<tr>
															<th scope="col">#</th>
															<th scope="col">Condition/Disorder</th>
															<th scope="col">Mother</th>
															<th scope="col">Father</th>
															<th scope="col">Brother</th>
															<th scope="col">Sister</th>
															<th scope="col">Grandparent</th>
															<th scope="col">Aunt/Uncle</th>
															<th scope="col">Other Close Relatives</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td>Alcoholism</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td>Anxiety</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>ADHD/ADD</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">4</th>
															<td>Autism Spectrum Disorder</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">5</th>
															<td>Bipolar Disorder</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">6</th>
															<td>Depression</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">7</th>
															<td>Epilepsy/Seizure Disorder</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">8</th>
															<td>Genetic Condition</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">9</th>
															<td>Hospitalized for Emotional Problems</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Intellectual disability</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">10</th>
															<td>Jail Time/Incarceration</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Language disorder</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">11</th>
															<td>Learning Disability</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">12</th>
															<td>Motor or Vocal Tics</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">13</th>
															<td>Psychosis or Schizophrenia</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">14</th>
															<td>Special Education</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">15</th>
															<td>Substance Abuse</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
														<tr>
															<th scope="row">16</th>
															<td>Suicidal Ideation/Attempt</td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
															<td><input type="name" className="form-control" size="3" /></td>
														</tr>
													</tbody>
												</table>



												<p id="pbh">PREGNANCY AND BIRTH HISTORY</p>

												<div className="col-12">
													<label>Parental ages when client was born:</label>
													<label for="form-click-label">Mom</label>
													<input type="pin" maxlength="3" size="3" />
													<label for="form-click-label">Dad</label>
													<input type="pin" maxlength="3" size="3" />
												</div>

												<div className="col-12">
													<label>Was this pregnancy full term?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>
												<div className="col-12">
													<label>If not, how many weeks before or after the expected due date was the baby born? </label>
													<input type="pin" maxlength="3" size="3" />
													<label for="form-click-label">Weeks</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>BEFORE</b></label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>AFTER</b></label>
													<label for="form-click-label">Due date</label>
												</div>

												<div className="col-12">
													<label>Pregnancy number: 1st, 2nd, 3rd, 4th, other </label>
													<input type="pin" maxlength="3" size="3" />
													<label>Totals: # of pregnancies  </label>
													<input type="pin" maxlength="3" size="3" />
													<label># of miscarriages </label>
													<input type="pin" maxlength="3" size="3" />
												</div>
												<div className="col-12">
													<label>Was this a multiple birth?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">UK ; if yes:</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>Twins</b></label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>Triplets</b></label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>Quadruplets</b></label>
												</div>
												<div className="col-12">
													<label>Were the babies identical? </label>
													<input type="pin" maxlength="3" size="3" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>No</b></label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"><b>UK</b></label>
													<label for="form-click-label">	&#40;unknown		&#41;</label>
												</div>

												<div className="col-12">
													<label>Please describe any problems that occurred during previous pregnancies 	&#40;e.g., miscarriage, premature labor and delivery, etc.		&#41;:</label>
													<input type="name" />
												</div>

												<p id="mhdp">Mother's health during pregnancy:</p>

												<div className="col-md-5">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															No health problems during pregnancy
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Poor weight gain
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Seizures
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															High blood pressure
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Other 	&#40;specify		&#41;
														</label>
														<input type="text" />
													</div>
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Health during pregnancy not known
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Severe nausea with dehydration
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Infections Flu, measles, CMV
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Eclampsia/Toxemia
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Rh 	&#40;blood group		&#41; incompatibility
														</label>
													</div>
												</div>

												<div className="col-md-12">
													<p>List medications taken during this pregnancy</p>
													<textarea name="text" id="goals-evaluation" cols="30" rows="2"
														className="form-control"></textarea>
												</div>

												<div className="col-12">
													<label>Did the mother consume more than 2 glasses of alcohol a day during this pregnancy?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>
												<div className="col-12">
													<label>Did the mother smoke during pregnancy?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>
												<div className="col-12">
													<label>Did the mother consume illegal substances during the pregnancy?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>

												<p id="ld">Labor and Delivery</p>
												<div className="col-12">
													<input className="form-check-input" type="checkbox" />
													<label>No problems during labor and delivery</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Not known</label>
												</div>

												<p>Please note whether any problems occurred during labor or delivery 	&#40; all that apply		&#41;:</p>
												<div className="col-md-5">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Excessive bleeding
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Meconium staining
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Fever or infection of mother
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Placenta previa or abruption
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Other 	&#40;specify		&#41;
														</label>
														<input type="text" />
													</div>
												</div>
												<div className="col-md-1"></div>
												<div className="col-md-5">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Forceps Used
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Umbilical cord around baby’s neck
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Breathing difficulties of child
														</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck" />
														<label className="form-check-label" for="Breath" id="gridLabel">
															Placenta 	&#40;bag of water		&#41; broke more than 1 day before delivery
														</label>
													</div>
												</div>

												<div className="col-12">
													<label>Baby was born </label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">head first</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">breech 	&#40;feet first		&#41; </label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">vaginal </label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Cesarean 	&#40;Why? 		&#41;</label>
													<input type="text" />
												</div>
												<div className="col-12">
													<label>Birth weight </label>
													<input type="pin" maxlength="5" size="5" />
													<label for="form-click-label">  lbs </label>
													<input type="pin" maxlength="5" size="5" />
													<label for="form-click-label"> oz</label>
													<label for="form-click-label">. Length</label>
													<input type="pin" maxlength="5" size="5" />
													<label for="form-click-label"> in. &#40;if known &#41;  Head circumference</label>
													<input type="text" />
													<label for="form-click-label"> in. &#40;if known &#41;</label>
												</div>

												<div className="col-12">
													<label> Apgar Scores &#40;if known &#41; </label>
													<input type="pin" maxlength="5" size="5" />
													<label for="form-click-label"> at 1 min  </label>
													<input type="pin" maxlength="5" size="5" />
													<label for="form-click-label">at 5 min</label>
													<input type="pin" maxlength="5" size="5" />
												</div>

												<p id="ld">Newborn period</p>

												<div className="col-12">
													<label>Was the child healthy as a newborn?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label"> If not, please describe the problems and treatment: </label>
												</div>
												<textarea name="text" id="goals-evaluation" cols="30" rows="2"
													className="form-control"></textarea>

												<div className="col-12">
													<label>Was the child born with any birth defects?</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">  If yes, explain: </label>
												</div>
												<textarea name="text" id="goals-evaluation" cols="30" rows="2"
													className="form-control"></textarea>
                                                
                                                <div className="col-12">
													<label>Did the child require treatment in a newborn intensive care unit? </label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<p>&#40;for
													<input type="pin" maxlength="5" size="5" />
													days&#41;</p>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>

												<div className="col-12">
													<label>Did the baby require any special care immediately after birth? </label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">Yes</label>
													<input className="form-check-input" type="checkbox" />
													<label for="form-click-label">No</label>
												</div>


												
												
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p
													className="boxpadding">
													<span className="fontapply">If yes, &radic; all that
														apply</span>
												</p>
												<p
													className="boxpadding">
													<input type="checkbox" name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Breathing problems
														&#40;requiring&nbsp;</span><input type="checkbox" name="" /><span
															className="fontapply">&nbsp;oxygen&nbsp;</span><input
														type="checkbox" name="" /><span
															className="fontapply1">&nbsp;&nbsp;</span><span
																className="fontapply1">ventilator</span><em><span
																	className="fontapply1">&nbsp;	&#40;with a tube
																	in
																	windpipe		&#41;</span></em>
												</p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Placement in an
														incubator&nbsp;</span></p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Blood
														transfusions</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="Checkbox1">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="Checkbox2">&nbsp;</span><span
																			className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
												</p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Significant muscle weakness or
														paralysis</span><span
															className="fontapply">&nbsp;&nbsp;&nbsp;</span></p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Poor
														muscle tone</span><span
															className="spacing30">&nbsp;</span><span
																className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><input type="checkbox"
													name="Check18" /><em><span
														className="fontapply">&nbsp;&nbsp;</span></em><span
															className="fontapply">Seizures</span><span
																className="spacing29">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="Checkbox2">&nbsp;</span><span
																			className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
												</p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Feeding difficulties</span><span
																className="spacing37">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
												</p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">Excessive sensitivity to
														noise/stimulation&nbsp;</span></p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><strong><span
														className="fontapply">&nbsp;&nbsp;</span></strong><span
															className="fontapply">Jaundice treated with lights</span>
												</p>
												<p className="Checkbox-space"><input type="checkbox"
													name="Check18" /><em><span
														className="fontapply">&nbsp;</span></em><span
															className="fontapply">&nbsp;</span><span
																className="fontapply">Infection</span></p>
												<p className="Checkbox-space"><input type="checkbox"
													name="" /><strong><span
														className="fontapply">&nbsp;&nbsp;</span></strong><span
															className="fontapply">Surgery 	&#40;describe		&#41;:</span><span
																className="fontapply">&nbsp;&nbsp;</span><span
																		className="spacing38">&nbsp;</span>
																															<input type="pin" maxlength="5" size="5" />
<span
																			className="Checkbox2">&nbsp;</span><span
																				className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
												</p>
												<p
													className="boxpadding">
													<strong><u><span
														className="spacing41">Developmental
														History</span></u></strong>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">Social
													Development</span></strong></p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">Did you
													notice any delays in the client&rsquo;s social
													development?&nbsp;</span><input type="checkbox" name="Check18" /><span
														className="fontapply">&nbsp;Yes</span><span
															className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">As an
													infant, did the client:</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Enjoying
														cuddling?</span><span
															className="spacing22">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">_</span>
												</p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply">Tend to be
														fussy/irritable?</span><span
															className="spacing42">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply">Make appropriate eye
														contact?</span><span
															className="spacing39">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="spacing6">
													<span className="fontapply">Respond to his/her
														name?</span><span
															className="spacing7">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">In the
													first four years of life, were any special problems noted in the following
													areas?&nbsp;</span></p>
												<p className="spacing6">
													<em><span className="fontapply">If yes, please describe
														below:</span></em>
												</p>
												<p className="spacing6">
													<em><span className="fontapply">&nbsp;</span></em>
												</p>
												<p className="spacing6">
													<span className="fontapply">Temper Tantrums</span><span
														className="spacing9">&nbsp;</span><span
															className="spacing8">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply"> Separating  from parents</span><span
														className="spacing10">&nbsp;</span><span
															className="spacing8">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing6">
													<span className="spacing8">&nbsp;</span>
												</p>
												<p className="spacing16">
													<span className="fontapply">Excessive crying</span><span
														className="spacing40">&nbsp;</span><span
															className="Checkbox2">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="spacing6">
													<span className="fontapply">Playing with other
														children</span><span
															className="spacing11">&nbsp;</span><span
																className="spacing8">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">Speech and Language 
													Development</span></strong></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="Checkbox-space"><span
													className="fontapply">Did you
													notice any delays in the client&rsquo;s language
													development?&nbsp;</span><span
														className="spacing12">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><em><span
														className="fontapply">If
														yes, please  specify:</span></em><span
															className="fontapply">&nbsp;<input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">Did the
													following milestones  develop on time? Please  specify age
													&#40;year/month		&#41;.</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply">Show interest in
														sound&nbsp;</span><em><span className="fontapply">	&#40;by 3
															months		&#41;</span></em><span
																className="spacing13">&nbsp;</span><span
																	className="fontapply">&nbsp;&nbsp;</span><span
																		className="spacing14">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Babbling&nbsp;</span><em><span
															className="fontapply">	&#40;by 4 to 6
															months		&#41;</span></em><span
																className="spacing15">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Understanding
														words&nbsp;</span><em><span className="fontapply">	&#40;by 6-11
															months		&#41;</span></em><span
																className="spacing50">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Speaking
														first words&nbsp;</span><em><span className="fontapply">	&#40;by
															12
															months		&#41;</span></em><span
																className="spacing43">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Speaking
														in short phrases&nbsp;</span><em><span
															className="fontapply">	&#40;by 24
															months		&#41;</span></em><span
																className="spacing44">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">Motor Development</span></strong>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">Did you
													notice any delays in the client&rsquo;s motor
													development?&nbsp;</span><input type="checkbox" name="Check18" /><span
														className="fontapply">&nbsp;Yes</span><span
															className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;</span></p>
												<p className="spacing6">
													<em><span className="fontapply">If yes, please
														specify:</span></em><span
															className="fontapply">&nbsp;<input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">Did the
													following milestones develop on time?&nbsp;</span><em><span
														className="fontapply">Please
														specify age 	&#40;year/month		&#41;.</span></em></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing31"><span
													className="Checkbox2">&nbsp;</span><span
														className="spacing17">Turn over 	&#40;by 6
														months		&#41;</span><span
															className="spacing32">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="spacing17">&nbsp;Yes</span><span
																className="spacing17">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="spacing17">&nbsp;No</span><span
																className="spacing17">&nbsp;&nbsp;&nbsp;</span><span
																	className="spacing17"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Sit
														alone 	&#40;by 9-12 months		&#41;</span><span
															className="spacing33">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Crawl
														&#40;by 9-12months		&#41;</span><span
															className="spacing51">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Stand
														alone 	&#40;by 9-12 months		&#41;</span><span
															className="spacing45">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Walk
														alone 	&#40;by 12-18 months		&#41;</span><span
															className="spacing46">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Walk 
														upstairs  	&#40;by 36 months		&#41;</span><span
															className="spacing45">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Walk
														downstairs 	&#40;by 48 months		&#41;</span><span
															className="spacing47">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Running&nbsp;</span><span
															className="spacing52">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">Which
													hand does the client use for writing or drawing?&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Right</span><span
																className="spacing53">&nbsp;</span><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Left</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><em><span
															className="fontapply">&nbsp;</span></em><span
																className="fontapply">Both</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="Checkbox2">&nbsp;</span><span
															className="Checkbox2">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
																			className="fontapply">Eating?&nbsp;</span><em><span
																				className="fontapply">&nbsp;</span></em><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Right</span><span
																className="spacing54">&nbsp;</span><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Left</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><em><span
															className="fontapply">&nbsp;</span></em><span
																className="fontapply">Both</span></p>
												<p className="spacing6">
													<span
														className="spacing8">&nbsp;</span><span
															className="spacing8">&nbsp;</span><span
																className="spacing8">&nbsp;</span><em><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></em><span
																		className="fontapply">Throwing?</span><em><span
																			className="fontapply">&nbsp;</span></em><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Right</span><span
																className="spacing48">&nbsp;</span><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Left</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><em><span
															className="fontapply">&nbsp;</span></em><span
																className="fontapply">Both</span>
												</p>
												<p className="Checkbox-space"><em><span
													className="fontapply">&nbsp;</span></em></p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">Daily Living</span></strong></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">When was
														the client  toilet trained?</span><span
															className="spacing55">&nbsp;</span><span
																className="fontapply">Days: <input type="pin" maxlength="5" size="5" /></span><span
																	className="spacing56">&nbsp;</span><span
																		className="fontapply">Nights:<input type="pin" maxlength="5" size="5" /></span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="spacing6">
													<span className="fontapply">Did bed-wetting occur after client 
														training?&nbsp;</span><input type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">If yes, until what age?
														<input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="spacing6">
													<span className="fontapply">Did bed-soiling occurs after toilet
														training?</span><span
															className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">If yes, until what age?
														<input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">Does your
													child have difficulty with sensory processing?</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">If yes,
														please describe below:</span></p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Tolerating Food Textures</span><span
															className="spacing34">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Gagging
														or Vomiting</span><span
															className="spacing49">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Tolerating Clothing</span><span
															className="spacing57">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Tolerating Touch from
														Others</span><span
															className="spacing36">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Does Not
														Notice Pain</span><span
															className="spacing35">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;Yes</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check18" /><span
															className="fontapply">&nbsp;No</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="Checkbox-space"><span
													className="Checkbox2">&nbsp;</span><span
														className="fontapply">Other&nbsp;</span><span
															className="spacing58">&nbsp;</span><span
																className="Checkbox2">&nbsp;</span><span
																	className="Checkbox2">&nbsp;</span><span
																		className="Checkbox2">&nbsp;</span><span
																			className="Checkbox2">&nbsp;</span><span
																				className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing6">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p className="spacing31"><strong>&nbsp;</strong></p>
												<p className="spacing31"><strong><span
													className="fontapply">Significant&nbsp;</span></strong><strong><u><span
														className="fontapply">LOSS</span></u></strong><strong><span
															className="fontapply">&nbsp;of an acquired skill or
															skills 	&#40;not
															just a
															delay		&#41;?</span></strong><strong><span
																className="spacing17">&nbsp;</span></strong><span
																	className="spacing17">For example, a child
														who was 
														engaging in pretend  play
														with other children for at least 4 to 6 months and then stopped and began
														just 
														spinning, dropping, or
														throwing objects in his/her free time or speaking in full sentences for many
														months 
														and then just stopped
														speaking altogether or began using only single  words
														occasionally		&#41;</span><strong><span
															className="spacing17">&nbsp;</span></strong>
												</p>
												<p className="Checkbox-space"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p
													className="spacing21">
													<span className="fontapply">Social functioning</span><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="spacing22">&nbsp;</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check52" /><span
															className="fontapply">&nbsp;Age of loss:
														<input type="pin" maxlength="5" size="5" /> months; Explain:</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="spacing19">&nbsp;</span><span
														className="spacing20">&nbsp;</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="spacing21">
													<span className="fontapply">Speech  / language</span><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="spacing59">&nbsp;</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check53" /><span
															className="fontapply">&nbsp;Age of loss:
														<input type="pin" maxlength="5" size="5" /> months; Explain:</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="spacing19">&nbsp;</span><span
														className="spacing20">&nbsp;</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="spacing21">
													<span className="fontapply">Problem solving</span><span
														className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
															className="spacing60">&nbsp;</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check51" /><span
															className="fontapply">&nbsp;Age of loss:
														<input type="pin" maxlength="5" size="5" /> months; Explain:</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="spacing19">&nbsp;</span><span
														className="spacing20">&nbsp;</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="spacing21">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="spacing21">
													<span className="fontapply">Motor
														coordination&nbsp;</span><span
															className="spacing61">&nbsp;</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check55" /><span
															className="fontapply">&nbsp;Age of loss:
														<input type="pin" maxlength="5" size="5" /> months; Explain:</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="spacing19">&nbsp;</span><span
														className="spacing20">&nbsp;</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="spacing21">
													<span className="fontapply">Bladder/bowel control</span><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="spacing27">&nbsp;</span><span
																className="fontapply">&nbsp;&nbsp;</span><input
														type="checkbox" name="Check56" /><span
															className="fontapply">&nbsp;Age of loss:
														<input type="pin" maxlength="5" size="5" /> months; Explain:</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="spacing18">
													<span className="spacing19">&nbsp;</span><span
														className="spacing20">&nbsp;</span><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply"><input type="pin" maxlength="5" size="5" /></span>
												</p>
												<p className="Checkbox-space"><span
													className="fontapply">&nbsp;</span></p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="spacing23">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<div className="col-12">
													<button type="submit" className="btn btn-primary"
														formaction="medicalhistory.html">Next</button>
												</div>
											</form>
										</div>
										{/* </div> */}
									</div>
								</div>
							</div>
						</div>
					</Container>
				</Box>
			</main>
		</div>
	);
};

export default PersonalHistory;


