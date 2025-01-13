import React, { act } from 'react'
import Styles from "./Sidebar.module.css";

const Sidebar = ({icon, active, alt}) => {
  return (
    <div className={Styles.imageContainer}>
        <img src={icon} alt={alt} className={active ? Styles.activeSideItem : Styles.sideItem}/>
    </div>
  )
}

export default Sidebar