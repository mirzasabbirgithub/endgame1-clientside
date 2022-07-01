
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Calendar from './components/Others/Calendar';
import CompletedTask from './components/Others/CompletedTask';
import Error from './components/Others/Error';
import Todo from './components/Others/Todo';
import EditTask from './components/Task/EditTask/EditTask';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/edit/:taskId" element={
          <EditTask></EditTask>
        }></Route>
        <Route path='/completedtask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
