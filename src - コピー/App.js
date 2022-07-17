import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';
import { LineAxis } from '@mui/icons-material';
import Line from './components/Line';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
