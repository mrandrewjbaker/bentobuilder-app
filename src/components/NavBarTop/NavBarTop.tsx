import { useAppSelector, useAppDispatch} from '../../app/hooks';

import styles from './NavBarTop.module.scss';
import { MdMenu } from 'react-icons/md';
import { SideMenu_Toggle } from '../SideMenu/SideMenu.slice';

export const NavBarTop = () => {
  const dispatch = useAppDispatch();

  const MenuButton_Click = () => {
    dispatch(SideMenu_Toggle())
  }

  return (
    <div className={styles.NavBarTop}>
      <div className={styles.NavBarTop_MenuButton}>
        <MdMenu onClick={MenuButton_Click} />
      </div>
    </div>
  )
}