import { Route, Link, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AllBrandPhone from "./screens/AllBrandPhone";
import Brand from "./screens/Brand";
import Home from './screens/Home';
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Profil from "./screens/Profil";
import Register from "./screens/Register";
import Spesific from "./screens/Spesific";

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/brandsAll' element={<AllBrandPhone />} />
      <Route path='/brands/:slug' element={<Brand />} />
      <Route path='/register' element={
        <ProtectedRoute isLogin={false}>
          <Register />
        </ProtectedRoute>
      } />
      <Route path='/specifications/:slug' element={
        <ProtectedRoute isLogin={true}>

          <Spesific />
        </ProtectedRoute>
      } />
      <Route path='/login' element={
        <ProtectedRoute isLogin={false}>
          <Login />
        </ProtectedRoute>
      } />
      <Route path='/profil' element={
        <ProtectedRoute isLogin={true}>
          <Profil />
        </ProtectedRoute>
      } />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
}

export default App;
