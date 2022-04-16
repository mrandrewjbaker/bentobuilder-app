import styles from './SideMenu.module.scss';
import { useAppSelector } from '../../app/hooks';
import { select_SideMenu } from './SideMenu.slice';
import { useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';

export const SideMenu = () => {
  const SideMenuState = useAppSelector(select_SideMenu)
  const [SideMenuOpened, setSideMenuOpened] = useState<boolean>(SideMenuState.value.SideMenuOpened)

  useEffect(() => {
    setSideMenuOpened(SideMenuState.value.SideMenuOpened)
  }, [SideMenuState.value.SideMenuOpened])

  return (
    <div className={`${SideMenuOpened ? styles.SideMenu : styles.SideMenuClosed }`}>
      <div className={styles.SideMenuContentFrame}>

        <div className={styles.SideMenuNav}>
          <div className={styles.SideMenuNavBack}>
            <MdArrowBack />
          </div>
          <div className={styles.SideMenuNavTitle}>
            <span className={styles.SideMenuNavTitleSpan}>MenuNav</span>
          </div>
        </div>

        <ul className={styles.SideMenuList}>
          <li>Projects</li>
          <li>Services</li>
          <li>Sandboxes</li>

        </ul>
      </div>


      <div className={styles.SideMenuResizeBorder_Right}>

      </div>
    </div>
  )
}