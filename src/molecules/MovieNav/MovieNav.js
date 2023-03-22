import React from 'react'
import { Button } from '../../atom'
import movieNavData from './MovieNav.routes'
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import styles from './movienav.module.css';

function MovieNav() {
    const {id, name} = useParams();
    const location =  useLocation();
    const navigate = useNavigate();
    

    const onNavClick = (link) => {
        const locationPath = '/show/' + id + '/' +  name + link;
        navigate(locationPath);
    }

    const getActiveLink = (link) => {
        const locationPath = '/show/' + id + '/' +  name + link;
        console.log(locationPath);
      
        if(locationPath === location.pathname){
          return true;
        }

        return false;
    }


  return (
    <div className={styles.movienav}>
        {movieNavData.map((data) =>
         <Button 
         key={data.name}
         type={getActiveLink(data.link) ? 'movienavactive' : 'movienavbtn'}
         onClick={() => onNavClick(data.link)}>
            {data.name}
         </Button>
         )}
    </div>
  )
}

export default MovieNav