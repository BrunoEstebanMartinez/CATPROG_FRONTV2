import { Navigate, Route, Routes } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { LandingRouter } from "./router/LandingRouter"
import { useCheckAuth } from "./hooks";
import { LandingRouterSimple } from "./router/LandingRouterSimple";




export const Catprog = () => {

  const status = useCheckAuth();
  console.log("EntraViewCatprog" + status);
  const compareValue = status.localeCompare("checking");
  console.log(compareValue, 'Soy el comapre');
  /*
      { compareValue === 0 ? 
        <Route path="/*" element={ <AppRouter /> } />          
        :
        // <Route path="/*" element={ <Navigate to="/landing" /> } />          
        <Route path="/*" element={ <Navigate to="/main/login" /> } />   
        }
  */
 
  return (
    <>
      <Routes>
        
        
        {/* <Route path="landing" element={ <LandingRouter />} /> */}
        
               
        { compareValue === 0 ? 
        <Route path="/*" element={ <AppRouter /> } />          
        :
        // <Route path="/*" element={ <Navigate to="/landing" /> } />          
        <Route path="/*" element={ <Navigate to="/main/login" /> } />   
        }
       

    
        {/* <Route path="landingSimple/:folio/:curp" element={ <LandingRouterSimple />} /> */}
        <Route path="main/*" element={ <AppRouter /> } />

        

      </Routes>
    </>
      // <AppRouter  />
  )
}
