
import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppWrapper, Header, Nav, NavItem } from './App.styled';



const Home = React.lazy(() => import('../Home.jsx/Home.js'));
const Movies = React.lazy(() => import('../Movies.jsx/Movies.js'));
const MovieDetails = React.lazy(() => import('../MovieDetails.jsx/MovieDetails.js'));
const NotFound = React.lazy(() => import('../NotFound'));

const App = () => {
  return (
    <AppWrapper>
      <Header>
        <Nav>
        <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
         
        </Suspense>
      </AppWrapper>
  );
};



export default App;

  

