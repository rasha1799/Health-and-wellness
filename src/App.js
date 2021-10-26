import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Footer from '../src/pages/Home/Home/Footer/Footer';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Trainers from './pages/Home/Home/Trainers/Trainers'
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/login">
<Login></Login>
        </Route>
        <Route path="/register"><Register></Register></Route>
        <PrivateRoute path="/service/:serviceDetail"><ServiceDetail></ServiceDetail></PrivateRoute>
        <Route path="/trainers"><Trainers></Trainers></Route>
        <Route path="*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
