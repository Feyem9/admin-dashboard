import { Container} from '@chakra-ui/react';

import './App.css';
import Login from './components/login/Login';
import DashHome from './components/dashbordHome/DashHome';
import DashCourse from './components/dashbordCourse/DashCourse';
import { Route,  Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import PostForm from './components/dashbordCourse/Postform';
import Dashbord from './components/dashbordHome/Dashbord';

const history = createBrowserHistory();

function App() {
  return (
    <Container>
      <Router navigator={history} location={history.location}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<DashHome />} />
          <Route path='/course' element={<DashCourse />} />
          <Route path='/dash' element={<Dashbord />} />
        </Routes>
      </Router>


    </Container>

  );
}

export default App;

