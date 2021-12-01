import { BrowserRouter, Route, Switch} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";

import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path='/'>
             <Home></Home>
          </Route>
          <Route exact path='/home'>
             <Home></Home>
          </Route>
          <Route exact path='/blog'>
             <BlogPage></BlogPage>
          </Route>

          <Route exact path='/project'>
             <ProjectsPage></ProjectsPage>
          </Route>
          <Route exact path='/project/:id'>
             <ProjectDetailsPage></ProjectDetailsPage>
          </Route>

          <Route exact path='/about'>
             <AboutPage></AboutPage>
          </Route>

          <Route exact path='/contact'>
             <ContactPage></ContactPage>
          </Route>


        </Switch>
       
      </BrowserRouter>
      

       
    </div>
  );
}

export default App;
