import React from 'react'
import { Button } from '../../atom'
import movieNavData from './MovieNav.routes'
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './movienav.module.css';

function MovieNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const onNavClick = (link) => {
        navigate(link);
    }


  return (
    <div className={styles.movienav}>
        {movieNavData.map((data) =>
         <Button 
         key={data.name}
         type={location.pathname === data.link ? 'movienavactive' : 'movienavbtn'}
         onClick={() => onNavClick(data.link)}>
            {data.name}
         </Button>
         )}
    </div>
  )
}

export default MovieNav