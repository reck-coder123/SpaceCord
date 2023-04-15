import styles from "./styles.module.css";
import {Link} from 'react-router-dom';
import logo from './LogoNoBG.png'
import spacelogo from './SpacecordBIG.png'
const Main=()=>{
    return(
        <>
        <div className={styles.full}>
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className={styles['container-fluid']}>
            <Link className="navbar-brand" to="#"><img src={logo} alt="" height="70px" className={styles.logo}/>Home</Link></div>
            <span style={{color:'white',padding:'5px 30px',margin:'1px 1px'}}><i className="fa-solid fa-user-astronaut fa-2xl"></i></span></nav>
            <img src={spacelogo} alt="" className={styles.centreImg}/>
            <div className={styles.bottom}><Link style={{position:'relative',color:'white',padding:'1% 7.5%',marginTop:'7%'}} to="/">Vault</Link><Link style={{position:'relative',color:'white',padding:'1% 7.5%',marginTop:'7%'}} to="/inscribe">Inscribe</Link><Link style={{position:'relative', color:'white',padding:'1% 7.5%',marginTop:'7%'}} to="">Feeds</Link><Link style={{position:'relative',color:'white',padding:'1% 7.5%',marginTop:'7%'}} to="">Cluster</Link><Link style={{position:'relative',color:'white',padding:'1% 7.5%',marginTop:'7%'}} to="">E-quip</Link></div>
    </div>
        </>
    );
}
export default Main;