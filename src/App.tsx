import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.global.scss';
import styles from './App.module.scss';

import { NavBarTop } from './components/NavBarTop/NavBarTop';
import { SideMenu } from './components/SideMenu/SideMenu';
import { RouterContainer } from './components/RouterContainer/RouterContainer';


import {Home} from './views/Home/Home';
import { Project } from './views/Project/Project';


export default function App() {
  return (
    <>
    <NavBarTop />
    <div className={styles.SideMenuAndRouterContainer}>
      <SideMenu />
      <RouterContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Router>
      </RouterContainer>
    </div>
    </>
  );
}
