import React from 'react';
import'./App.css';
import { BlogProvider } from './context/BlogProvider';

import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import{Post} from './pages/Post';
function App() {
  return (
   
      <BlogProvider>
         <div className="App">
        <Router>
        <Navbar/>

        <Switch>
        <Route path='/'> <Home/> </Route>
        <Route path='/:postId'> <Post/> </Route>
        </Switch>

       
        </Router>
      


     </div>
     </BlogProvider>
    
  );
}

export default App;
