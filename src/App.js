import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component.jsx';
import Home from './routes/home/home.components.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<div>shop</div>} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
