import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AQTest from "./pages/AQTest/AQTest";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import './App.css';
import FingerTapping from './pages/FingerTapping/FIngerTapping';
import EMGame from './pages/EMGame/EMGame';
import PersonalHistory from './pages/PersonalHistory/PersonalHistory';
import MedicalHistory from './pages/MedicalHistory/MedicalHistory';
import Brainfrequency from './pages/Brainfrequency/Braintest';
import MemoryTest from './pages/MemoryTest/MemoryTest';
import BallGame from './pages/BallGame/BallGame';
import VideoUpload from './pages/VideoUpload/VideoUpload'


function App() {
  const [theme, colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <AuthProvider>
    
      <Router>
        <Switch>
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute  path="/AQTest" component={AQTest} />
          <PrivateRoute  path="/FingerTapping" component={FingerTapping} />
          <PrivateRoute  path="/EmojiTest" component={EMGame} />
          <PrivateRoute  path="/MedicalHistory" component={MedicalHistory} />
          <PrivateRoute  path="/PersonalHistory" component={PersonalHistory} />
          <PrivateRoute  path="/Brainfrequency" component={Brainfrequency} />
          <PrivateRoute  path="/MemoryTest" component={MemoryTest} />
          <PrivateRoute  path="/BallGame" component={BallGame} />
          <PrivateRoute  path="/VideoUpload" component={VideoUpload} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route exact path="*" component={SignIn} />
        </Switch>
      </Router>
    
    </AuthProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
