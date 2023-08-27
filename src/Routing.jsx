import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './ProjectPage';

function Routing() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/projects" element = {<ProjectPage />}/>
        
      </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default Routing;