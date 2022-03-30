import LogIn from './components/logsign/LogIn';
import HomePage from './pages/HomePage';
import {AuthProvider} from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/logsign/SignUp';
import PrivateComponent from './PrivateComponent';

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route element={<PrivateComponent/>}>
                  <Route path="/homepage" element={<HomePage/>}/>
                </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;

// import { Routes, Route } from 'react-router-dom';

// import AllMeetUpsPage from './pages/AllMeetUps';
// import NewMeetUpPage from './pages/NewMeetUp';
// import Favourites from './pages/Favourites';
// import MainNavigation from './components/layout/MainNavigation';

// function App() {
  
//   return (
//     <div>
//       <MainNavigation/>
//       <Routes>
//         <Route path="/" element={<AllMeetUpsPage />} />
//         <Route path="/new-meetup" element={<NewMeetUpPage />} />
//         <Route path="/favorites" element={<Favourites />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
