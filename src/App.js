import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component.jsx';
import Home from './routes/home/home.components.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<div>shop</div>} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
