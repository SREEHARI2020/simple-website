import React from 'react';
import {Navbar} from './components/Navbar';
import{Background} from './components/Background';
import'./App.css';
import { BlogProvider } from './context/BlogProvider';
import { PostLists } from './components/PostLists';
function App() {
  return (
   
      <BlogProvider>
         <div className="App">
     <Navbar />
     <Background />
     <PostLists/>
     </div>
     </BlogProvider>
    
  );
}

export default App;
