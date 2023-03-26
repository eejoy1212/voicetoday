import React from "react";
import styles from "../../Styles/SideMenu.module.css";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import UsualMenu from '../UsualMenu/UsualMenu';
import "../../Styles/App.css";
import ThemeMenu from '../ThemeMenu/ThemeMenu';
export default function SideMenu({usuals,onColorPicker}) {
  return (
    <div className={styles.sideMenu}>
      <ul>
        <li>
          <ProfileMenu />
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <UsualMenu usuals={usuals}/>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li><ThemeMenu onColorPicker={onColorPicker}/></li>
        <li></li>
      </ul>
    </div>
  );
}
