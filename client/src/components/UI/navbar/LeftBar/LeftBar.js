import "./style.css";
import { useState } from "react";
import { Avatar } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import OrangeLogo from "../../svg/OrangeLogo";
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';

import Settings from "@mui/icons-material/Settings";

export default function LeftBar () {

  const [svgStyle, setSvgStyle] = useState("svg");
  const [leftBarStyle, setLeftBarStyle] = useState("leftBar");
  
  const handleMenu = () => {
    let isOpen = svgStyle === "svg";
    !isOpen ? setSvgStyle("svg") : setSvgStyle("svgOpen");
    !isOpen ? setLeftBarStyle("leftBar") : setLeftBarStyle("leftBarOpen");
  }

  return (
    <div className={leftBarStyle}>
      <div className="navbarVertical">
        <div className="divNavbar">
        <IconButton aria-label="open menu" onClick={handleMenu} sx={{marginBottom: "2rem"}}>
        <OrangeLogo className={svgStyle}/>
</IconButton>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />

            <p>Painel de controle</p>
          </div>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />

            <p>Desempenho</p>
          </div>
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />
            <p>Calendario de Notas</p>
          </div>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />

            <p>Avisos e notificações</p>
          </div>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />
            <p>Regulamento escolar</p>
          </div>

          
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
          <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />
            <p>Lista de atividades</p>
          </div>
          
          <div className="iconDiv">
            <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E', marginTop:'2.3rem'  }} width={40} height={40} />
            { /* <SettingsIcon size={50} sx={{color:"white"}} fontSize="large" /> */ }
            <p>Averiguação do sistema</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
