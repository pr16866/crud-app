import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Home from "./component/home";

import Navbar from "./component/navbar";
import NotFound from "./component/not found";
import Form from "./component/form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
     
    <Router> 
        <Navbar />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          icon={true}
        />
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
     
       

        <Route exact path="/users/add">
         <Form/>
        </Route>
        
        
   <Route>
            <NotFound />
   </Route>
      </Switch>
      
    </Router>
   
    
      
      
    </>
  );
}

export default App;
