
// React imports
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";

// Components
import { Main } from "../../pages/main/Main";
import Form from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../hooks/responses/NotFound";
import { Call } from "../../pages/call/Call";

import PrivateRoute from "./PrivateRoute";
import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";

// Global

export default function RouteNavigation () {

  const location = useLocation();

  return (
  
      <div className="components">

        { // A navbar de ferramentas (leftbar) somente aparecerá caso o user nao esteja logando
         location.pathname !==  "/" && ( <LeftBar />)
        }
        
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/teacher" element={<RegisterTeacher />} />
          <Route path="/boletim" element={<Boletim />} />
          <Route path="/quest" element={<Call />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

  );
}
