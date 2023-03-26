import React from "react";
import "../../Styles/App.css";
import {AiOutlineMenu} from "react-icons/ai";
import {VscFilter}from "react-icons/vsc"
import styles from "../../Styles/AppBar.module.css";
export default function AppBar({onSideMenuClick,sideMenu}) {
  console.log('props',onSideMenuClick)
  // const {sideMenu,onSideMenuClick} = props;
  return (
    <div className={styles.appBar}>
      <button  type='button' className={styles.menu} onClick={onSideMenuClick}><AiOutlineMenu size={'24px'} color={sideMenu?"transparent":"black"}/></button>
      <div className="spacer"></div>
      <div className={styles.selected}>2023</div>
      <div className="slash">/</div>
      <div className='month'>02</div>
      <div className="slash">/</div>
      <div className='day'>25</div>
    <div className="spacer"></div>
    <button  type='button' className={styles.filter}><VscFilter size={'24px'}/></button>

    </div>
  );
}
