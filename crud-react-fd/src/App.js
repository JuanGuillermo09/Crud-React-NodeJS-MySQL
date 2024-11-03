
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateStudentn from './CreateStudentn';
import Studentn from './Stundent';
import UpdateStudentn from './UpdateStudentn';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Studentn />} ></Route>
        <Route path='/create' element= {<CreateStudentn />} ></Route>
        <Route path='/update/:id' element= {<UpdateStudentn />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
