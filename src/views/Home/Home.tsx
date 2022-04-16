import { useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';


export const Home = () => {
  const navigate = useNavigate()
  const CreateProjectButton_Click = () => {
    navigate('/project')
  }

  return (
    <div className={styles.Home}>


      <div className={styles.HomeButtonRow}>
        <button onClick={CreateProjectButton_Click}>Create a Project</button>
        <button>Load a Project</button>
      </div>
    </div>
  )
}