import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { MainRoutes } from "./MainRoutes";
import { LoadingPage } from "../ui/components";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {

  const status = useCheckAuth();
  console.log(status);

  if( status === 'checking' ){
      return <LoadingPage />
    }

const compareValue = status.localeCompare("authenticated");
console.log(compareValue + "EntraAuthExist");

  return (
    <>
      <Routes>
          { compareValue === 0 ? 
            <Route path="/*" element={[  <MainRoutes /> ]}  /> 
          : <Route path="/*" element={[ <Navigate to="login/" />, <AuthRoutes /> ]} />
          }
      </Routes>
    </>
    
  )
}
