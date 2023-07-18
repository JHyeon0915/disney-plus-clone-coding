import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
