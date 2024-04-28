import { Box, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container from '@mui/material/Container';
import './MedicalHistory.css'



const MedicalHistory = () => {
	// const theme = useTheme&#40;&#41;;
	// const colors = tokens&#40;theme.palette.mode&#41;;

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
						Medical History
					</Typography>
					<Typography variant="h5"
						sx={{ m: "0px 25px" }} >
						Form
					</Typography>
					<Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
						{/* HEADER */}
						<div className="row">
							<div className="col-lg-12">
								<div classNmae="d-flex justify-content-space-between align-items-center">
									<div className="d-flex justify-content-center align-items-center">
										<div className="login-card1 container">
											<div className="border border-3 border-primary"></div>
											{/* <div className="card bg-white"> */}
											<div className="border shadow p-5">
												<p id="mh">MEDICAL HISTORY</p>
												<p
													className="aaa">
													<span className="fontapply">&nbsp;</span>
												</p>
												<p
													className="aaaa">
													<input type="checkbox" name="Check55" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">No serious illnesses or injuries in
														the&nbsp;</span><strong><span
															className="fontapply">past</span></strong><span
																className="bbb">&nbsp;</span><input
														type="checkbox" name="Check55" /><span
															className="fontapply">&nbsp;&nbsp;</span><span
																className="fontapply">No serious illnesses or
														injuries&nbsp;</span><strong><span
															className="fontapply">now</span></strong>
												</p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>


												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">Date</th>
															<th scope="col">Age</th>
															<th scope="col">Diagnosis/Illness</th>
															<th scope="col-xs-2">Past</th>
															<th scope="col-xs-2">Now</th>
															<th scope="col">Date</th>
															<th scope="col">Age</th>
															<th scope="col">Diagnosis/Illness</th>
															<th scope="col-xs-2">Past</th>
															<th scope="col-xs-2">Now</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Serious Injuries</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Lung/breathing Problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Serious head injury</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Asthma</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other serious injury</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Pneumonia</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Loss of consciousness</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Apnea or irregular breathing</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Sleep Problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Neurological Problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Stomach/bowel Problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Birth abnormality</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Swallowing problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Seizures &#40;any type&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Gastroesphageal reflux</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Chronic abdominal pain</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Vision Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Chronic diarrhea</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Vision problems at birth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Chronic constipation</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Requires glasses/contacts</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Kidney/Bladder Problems</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Hearing Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Abnormalities at birth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Hearing problems at birth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Kidney/bladder infections</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Deafness</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Chronic ear infections</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">&#40;Muscle/bone/joint&#41; Problems </td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Ear tubes</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Abnormalities at birth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Scoliosis or spinal curvature</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
													</tbody>
													{/* <!-- </table> --> */}
													{/* <!-- <table className="table table-bordered"> --> */}
													<thead className="thead-dark">
														<tr>
															<th scope="col">Date</th>
															<th scope="col">Age</th>
															<th scope="col">Diagnosis/Illness</th>
															<th scope="col-xs-2">Past</th>
															<th scope="col-xs-2">Now</th>
															<th scope="col">Date</th>
															<th scope="col">Age</th>
															<th scope="col">Diagnosis/Illness</th>
															<th scope="col-xs-2">Past</th>
															<th scope="col-xs-2">Now</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Dental Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Circulatory Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Abnormally shaped/ missing teeth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Anemia</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Extractions/cavities</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Sickle cell disease</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Dental braces</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Chronic low platelet count</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Bleeding /bruising problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Skin Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Eczema</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Hormone Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Ash leaf patches</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Sugar diabetes</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Café-au-lait spots</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Early puberty</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Late or incomplete puberty</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Growth Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Failure to gain weight</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Mental Health problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Obesity</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>ADHD</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Short stature</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Oppositional defiant disorder</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Tall stature</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Anxiety disorder</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other: <input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Obsessive-compulsive disorder</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td className="font-weight">Heart Problem</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Depression</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Heart abnormalities at birth</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Bipolar disorder &#40;manic-depressive&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Heart surgery</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Schizophrenia</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Heart rhythm abnormalities</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Tic disorder &#40;e.g., Tourette&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>High blood pressure</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Intellectual disability</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="date" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="2" size="2" /></td>
															<td>Eating disorder &#40;e.g.,anorexia&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td> </td>
															<td></td>
															<td></td>
															<td></td>
															<td>Other:<input type="text" className="form-control" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
													</tbody>
												</table>



												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">
													I have confirmed with my child&rsquo;s Primary Care MD that his/her immunizations are up to date.</span><span
														className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
															name="Check156" /><span
																className="fontapply">&nbsp;</span><strong><span
																	className="fontapply">Yes&nbsp;</span></strong><input
														type="checkbox" name="Check156" /><span
															className="fontapply">&nbsp;</span><strong><span
																className="fontapply">No</span></strong><span
																	className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">If no,
													explain:_______________________________________________________________________</span></strong>
												</p>
												<p className="ccc">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="ccc">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="cccc"><strong><span
													className="fontapply">Specialized neurological or genetic
													tests:</span></strong></p>
												<p className="ccc">
													<strong><span className="fontapply">&nbsp;</span></strong>
												</p>
												<p className="ccc"><input
													type="checkbox" name="Check55" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">No neurological or genetic testing has
														been
														done</span></p>
												<p className="ccc">
													<strong>&nbsp;</strong>
												</p>



												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">If done</th>
															<th scope="col">Date &#40;if known&#41; Month/Year</th>
															<th scope="col">Test</th>
															<th scope="col">Normal Result</th>
															<th scope="col">Abnormal Result</th>
															<th scope="col">Unknown Result</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>EEG &#40;brain wave test&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>CT scan</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>MRI scan</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>PET/SPECT/ scan</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>Other scan &#40;specify&#41;:<input type="text" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>Chromosomal microarray</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>Chromosomal analysis &#40;karyotype&#41;</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>DNA testing for fragile X syndrome</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
														<tr>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td><input type="name" className="form-control" /></td>
															<td>Other genetic test:<input type="text" /></td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
															<td>
																<input className="form-check-input" type="checkbox" id="gridCheck" />
															</td>
														</tr>
													</tbody>
												</table>


												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="ddd"><strong><span
													className="fontapply">List all hospitalizations and surgeries for the client, include overnight stays
													&#40;medical
													or
													behavioral&#41;&nbsp;</span></strong></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="bbbb"><input type="checkbox"
													name="Check55" /><span className="fontapply">&nbsp;No past
														hospitalizations or surgery</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>


												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">Reason for hospitalization/surgery</th>
															<th scope="col-xs-2">Age</th>
															<th scope="col">Length of stay</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="pin" className="form-control" maxlength="6" size="6" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
													</tbody>
												</table>

												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="ddd"><strong><span
													className="fontapply">Allergies&nbsp;</span></strong><span
														className="fontapply">&#40;to medications, foods, environmental
														antigens, etc.&#41;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><input type="checkbox"
													name="Check55" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply">No
														past or current allergies</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>

												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">Reason for hospitalization/surgery</th>
															<th scope="col">Nature of reaction &#40;hives, trouble breathing, etc.&#41;</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
														</tr>
													</tbody>
												</table>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="ddd"><strong><span
													className="fontapply">Current
													Medications&nbsp;</span></strong></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="bbbb"><input type="checkbox"
													name="Check55" /><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="fontapply"> No
														medications taken&nbsp;</span><strong><span
															className="fontapply">now</span></strong><span
																className="dddd">&nbsp;</span><span
																	className="eee">&nbsp;</span><input type="checkbox"
																		name="Check55" /><span
																			className="fontapply">&nbsp;&nbsp;</span><span
																				className="fontapply">Medications are being taken  now, but  the
														names are not known</span>
												</p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>


												<table className="table table-bordered">
													<thead className="thead-dark">
														<tr>
															<th scope="col">Medication</th>
															<th>Dosage</th>
															<th>Age at start</th>
															<th scope="col">Reason for medication</th>
															<th>Improved</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
															<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
															<td><input type="name" className="form-control" /></td>
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
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
															<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
															<td><input type="name" className="form-control" /></td>
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
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
															<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
															<td><input type="name" className="form-control" /></td>
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
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
															<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
															<td><input type="name" className="form-control" /></td>
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
															<td><input type="name" className="form-control" /></td>
															<td><input type="text" className="form-control" size="6" /></td>
															<td><input type="text" className="form-control" maxlength="2" size="2" /></td>
															<td><input type="name" className="form-control" /></td>
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

												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">Name of person prescribing  the
													medications:
													_________________________________________________</span></strong></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="ddd"><strong><u><span
													className="fontapply">RESOURCES</span></u></strong><span
														className="eeee">: Please indicate
														resources/services being
														received&nbsp;</span><strong><span
															className="eeee">now</span></strong>
												</p>
												<p className="bbbb"><input type="checkbox"
													name="Check55" /><strong><span
														className="fontapply">&nbsp;</span></strong><span
															className="fontapply">&nbsp;</span><span
																className="fontapply">No
														resources/services are being received  now</span><strong><span
															className="fontapply">&nbsp;</span></strong></p>
												<p className="bbbb"><input type="checkbox"
													name="Check122" /><span className="fontapply">&nbsp;Early
														Intervention Services
														&#40;Agency:______________________________&#41;</span><span
															className="fff">&nbsp;</span><span
																className="eee">&nbsp;</span></p>
												<p className="bbbb"><input type="checkbox"
													name="Check122" /><span
														className="fontapply">&nbsp;Speech/Language
														therapy</span><span
															className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																name="Check122" /><span className="fontapply">&nbsp;Psychiatry
																	services</span><span
																		className="fontapply">&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check122" /><span
															className="fontapply">&nbsp;Behavioral therapy</span><span
																className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																	name="Check122" /><span className="fontapply">&nbsp;Group
																		therapy</span><span
																			className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																				name="Check122" /><span className="fontapply">&nbsp;Physical
																					therapy</span></p>
												<p className="bbbb"><input type="checkbox"
													name="Check122" /><span className="fontapply">&nbsp;Occupational
														therapy</span><span
															className="fontapply">&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check122" /><span
															className="fontapply">&nbsp;Case management</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check122" /><span
															className="fontapply">&nbsp;Wraparound services
														&#40;WRAP&#41;</span><span
															className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																name="Check122" /><span className="fontapply">&nbsp;Mobile
																	Therapist
																	&#40;MT&#41;</span><span className="fontapply">&nbsp;&nbsp;</span></p>
												<p className="bbbb"><input type="checkbox"
													name="Check122" /><span className="fontapply">&nbsp;Behavior
														Specialist Consultant &#40;BSC&#41;</span><span
															className="fontapply">&nbsp;&nbsp;</span><input type="checkbox"
																name="Check122" /><span className="fontapply">&nbsp;Therapeutic
																	Staff
																	Support &#40;TSS&#41;&nbsp;</span><input type="checkbox" name="Check122" /><span
																		className="fontapply">&nbsp;Other:
														_______________________</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="ddd"><strong><u><span
													className="fontapply">EDUCATIONAL
													HISTORY</span></u></strong><strong><span
														className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong>
												</p>
												<p className="bbbb"><span
													className="fontapply">School
													name:</span><span
														className="ffff">&nbsp;</span><u><span
															className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																	className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																		className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																			className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																				className="fontapply">_______________</span></u><span
																					className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																						className="fontapply">Phone:</span><u><span
																							className="gggg">&nbsp;&nbsp;&nbsp;</span></u><u><span
																								className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																									className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
																										className="ggg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u>
												</p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">Grade in
													school:&nbsp;</span><u><span
														className="fontapply">&nbsp;&nbsp;&nbsp;</span></u><u><span
															className="hhh">&nbsp;&nbsp;&nbsp;</span></u><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">&#40;ever repeat a grade?</span><span
																		className="fontapply">&nbsp;&nbsp;</span><span
																			className="fontapply">Yes /
														No&#41;</span><strong><span
															className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																className="fontapply">Teacher &#40;or best
														contact&#41;:&nbsp;</span><u><span
															className="fontapply">&nbsp;</span></u><u><span
																className="fontapply">___________________</span></u><u><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u>
												</p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">Is the
													client currently on a formal education plan in school?&nbsp;</span><input
														type="checkbox" name="Check156" /><span
															className="fontapply">&nbsp;</span><strong><span
																className="fontapply">Yes&nbsp;</span></strong><input
														type="checkbox" name="Check156" /><span
															className="fontapply">&nbsp;</span><strong><span
																className="fontapply">No</span></strong></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">If yes,
													please check:&nbsp;</span><span
														className="hhhh">&nbsp;</span><span
															className="fontapply">□ IEP</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">□ 504 Plan&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">What best
													describes  the client&rsquo;s current  educational program?</span></p>
												<p className="bbbb"><span
													className="fontapply">Full time
													in a regular className&nbsp;</span><span
														className="iii">&nbsp;</span><span
															className="eee">&nbsp;</span><span
																className="eee">&nbsp;</span><span
																	className="eee">&nbsp;</span><span
																		className="eee">&nbsp;</span><input type="checkbox"
																			name="Check140" /><span className="fontapply">&nbsp;&nbsp;</span>
												</p>
												<p className="bbbb"><span
													className="fontapply">Time split  between regular and special education classes</span><span
														className="iiii">&nbsp;</span><span
															className="eee">&nbsp;</span><input type="checkbox"
																name="Check142" /><span className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">Special
													education className</span><span
														className="jjj">&nbsp;</span><span
															className="eee">&nbsp;</span><span
																className="eee">&nbsp;</span><span
																	className="eee">&nbsp;</span><span
																		className="eee">&nbsp;</span><span
																			className="eee">&nbsp;</span><input type="checkbox"
																				name="Check143" /><span className="fontapply">&nbsp;&nbsp;</span>
												</p>
												<p className="bbbb"><span
													className="fontapply">AideParaprofessional  or extra
													help</span><span className="rrrr">&nbsp;</span><span
														className="eee">&nbsp;</span><span
															className="eee">&nbsp;</span><span
																className="eee">&nbsp;</span><input type="checkbox"
																	name="Check143" /><span className="fontapply">&nbsp;&nbsp;</span>
												</p>
												<p className="bbbb"><span
													className="fontapply">Specialized  school</span><span
														className="fontapply">&nbsp;&nbsp;</span><span
															className="jjjj">&nbsp;</span><span
																className="eee">&nbsp;</span><span
																	className="eee">&nbsp;</span><span
																		className="eee">&nbsp;</span><span
																			className="eee">&nbsp;</span><span
																				className="eee">&nbsp;</span><input type="checkbox"
																					name="Check144" /><span className="fontapply">&nbsp;&nbsp;</span>
												</p>
												<p className="bbbb"><span
													className="fontapply">Home
													schooled&nbsp;</span><span
														className="kkk">&nbsp;</span><span
															className="eee">&nbsp;</span><span
																className="eee">&nbsp;</span><span
																	className="eee">&nbsp;</span><span
																		className="eee">&nbsp;</span><span
																			className="eee">&nbsp;</span><span
																				className="eee">&nbsp;</span><input type="checkbox"
																					name="Check145" /></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="ddd"><strong><span
													className="fontapply">Please indicate
													the educational program in which the client  participated during  his/her
													school*
													years:</span></strong>
												</p>
												<table cellpadding="0" cellspacing="0"
													className="kkkk">
													<tbody>
														<tr className="lll">
															<td
																className="llll">
																<p className="bbbb">
																	<strong><span className="fontapply">School
																		Year</span></strong></p>
															</td>
															<td colspan="2"
																className="mmm">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong><strong><span
																			className="fontapply">Type of
																			School</span></strong></p>
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
																<p className="bbbb"><span
																	className="fontapply">Regular</span><strong><span
																		className="fontapply">*</span></strong><strong><span
																			className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																				className="fontapply">Special</span></p>
															</td>
															<td colspan="2"
																className="mmmm">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;&nbsp;</span></strong><strong><span
																			className="fontapply">Type of
																			Class</span></strong></p>
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
																<p className="bbbb"><span
																	className="fontapply">&nbsp;</span></p>
																<p className="bbbb"><span
																	className="fontapply">Regular*</span><strong><span
																		className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																			className="fontapply">Special*</span></p>
															</td>
															<td colspan="3"
																className="sss">
																<p className="bbbb"><em><span
																	className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></em><em><span
																		className="fontapply">Any Special
																		Services</span></em></p>
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
																<p className="bbbb"><span
																	className="fontapply">&nbsp;</span></p>
																<p className="bbbb"><span
																	className="fontapply">Yes&nbsp;</span><strong><span
																		className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><span
																			className="fontapply">No</span><span
																				className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><u><span
																					className="fontapply">Type</span></u></p>
															</td>
														</tr>
														<tr>
															<td
																className="ssss">
																<p className="bbbb"><span
																	className="fontapply">3-5 preschool</span></p>
															</td>
															<td
																className="ttt">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="tttt">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="vvv">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="tttt">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="uuu">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="uuu">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="uuuu">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">Kindergarten</span></p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">1</span><span
																		className="rrr"><sup>st</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">2</span><span
																		className="rrr"><sup>nd</sup></span><span
																			className="fontapply">&nbsp;</span></p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">3</span><span
																		className="rrr"><sup>rd</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">4</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">5</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">6</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">7</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">8</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">9</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">10</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="ppp">
																<p className="bbbb"><span
																	className="fontapply">11</span><span
																		className="rrr"><sup>th</sup></span>
																</p>
															</td>
															<td
																className="nnnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="nnn">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="qqq">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="pppp">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
														<tr>
															<td
																className="vvvv">
																<p className="bbbb"><span
																	className="fontapply">12</span><span
																		className="rrr"><sup>th</sup></span><span
																			className="fontapply">&nbsp;</span></p>
															</td>
															<td
																className="www">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="wwww">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="xxx">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="wwww">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="xxxx">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="xxxx">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
															<td
																className="yyy">
																<p className="bbbb">
																	<strong><span
																		className="fontapply">&nbsp;</span></strong>
																</p>
															</td>
														</tr>
													</tbody>
												</table>



												<p className="bbbb"><strong><span
													className="fontapply">*
													REGULAR school applies to public or private schools for children without
													disabilities.</span></strong><strong><span
														className="fontapply">&nbsp;&nbsp;</span></strong></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;&nbsp;&nbsp;</span></strong><strong><span
														className="fontapply">SPECIAL school applies to any schools
														intended for children with
														disabilities</span></strong></p>
												<p className="bbbb"><strong><span
													className="fontapply">&nbsp;</span></strong></p>
												<p className="ddd"><strong><u><span
													className="fontapply">SOCIAL AND
													BEHAVIORAL FUNCTIONING</span></u></strong></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">Peer Relationships</span></strong>
												</p>
												<p className="bbbb"><span
													className="fontapply">Please
													indicate how the client relates to peers:</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Has problems
															relating to other children</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Has
															difficulty
															making friends</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Fights
															frequently
															with peers</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Prefers
															playing
															with younger children&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;&nbsp;</span><span
														className="yyyy">&nbsp;</span><input type="checkbox"
															name="Check140" /><span className="fontapply">&nbsp;Prefers
																playing
																with older children</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Prefers to
															play
															alone</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span className="fontapply">&nbsp;Has a best
															friend</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">What role
													does the client take in peer groups?&nbsp;</span><input type="checkbox"
														name="Check140" /><span
															className="fontapply">&nbsp;Leader</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check140" /><span
															className="fontapply">&nbsp;Follower</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;&nbsp;</span><input
														type="checkbox" name="Check140" /><span
															className="fontapply">&nbsp;Some of Each</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">How many
													friends does the client have? _________________________</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><strong><span
													className="fontapply">Recreational
													Interests</span></strong>
												</p>
												<p className="bbbb"><span
													className="fontapply">What does
													the client enjoy?</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span
															className="fontapply">&nbsp;Sports</span><span
																className="fontapply">&nbsp;&nbsp;</span><span
																	className="fontapply">_________________________________________________________________________________</span>
												</p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span></p>
												<p className="zzz"><input
													type="checkbox" name="Check140" /><span
														className="fontapply">&nbsp;Hobbies________________________________________________________________________________</span>
												</p>
												<p className="zzz"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="eee">&nbsp;</span><input type="checkbox"
														name="Check140" /><span
															className="fontapply">&nbsp;Other</span><span
																className="fontapply">&nbsp;&nbsp;&nbsp;</span><span
																	className="fontapply">_________________________________________________________________________________</span>
												</p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">What are
													the client&rsquo;s personal  strengths?</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">What do
													you enjoy most about the client?</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">&nbsp;</span></p>
												<p className="bbbb"><span
													className="fontapply">What are
													your hopes for the client&rsquo;s future?</span></p>

												<div className="col-12"></div>
												<div className="col-12">
													<button type="submit" className="btn btn-primary" formaction="aqtest.html">Next</button>
												</div>
											</div>
											{/* </div> */}
										</div>
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

export default MedicalHistory;
