import React , {useEffect, useCallback} from "react";
import { useLocation, useNavigate} from "react-router-dom";

import styles from "./breadcrumb.module.css";

function Breadcrumb() {

    const location = useLocation();
    const navigate = useNavigate();
    const [breadCrumbRoute, setBreadCrumbRoute] = React.useState([{name: "Home",link: '/'}]);


    useEffect(() => {
        const pathParser = () => {
            var urlPath = location.pathname.split('/');
            const pathlist = [];
            
            urlPath.forEach((path, index) => {
                if(!path){
                    if(index===0){
                        pathlist.push({name: "Home", link: "/"});
                    }
                }else{
                    const lastele =  pathlist[pathlist.length - 1];
                    const nextlink = lastele.link + path + "/";
                    pathlist.push({name: path, link: nextlink});
                }
            })

            setBreadCrumbRoute(pathlist);
        };

        pathParser();
    }, [location]);

    const onBreadCrumbClick = useCallback((link) => {
        navigate(link);
    }, [navigate])

    return (
        <div>
            <nav aria-label="Breadcrumb" class={styles.breadcrumb}>
                <ul>
                    {breadCrumbRoute.map((route) => <li key={route.name} onClick={() => onBreadCrumbClick(route.link)}>{route.name}</li>)}
                </ul>
            </nav>
        </div>
    );
}

export default React.memo(Breadcrumb);