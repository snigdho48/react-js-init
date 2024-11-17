import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './app/pages/home';

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
];

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
