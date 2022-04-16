import React, { ReactEventHandler, useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectNewModule } from './ProjectNewModule/ProjectNewModule';

import styles from './Project.module.scss';
import { backEndModuleClassTypeEnums, backEndModuleClassTypeOptions, frontEndModuleClassTypeEnums, frontEndModuleClassTypeOptions, moduleClassEnums, moduleClassOptions, TProjectDetails, TProjectModule } from './Project.types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { select_Project, setShowCreateNewModule } from './Project.slice';


export const Project = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const dispatch = useAppDispatch();
  const ProjectState = useAppSelector(select_Project);


  const initialProjectDetails: TProjectDetails = {
    id: 0,
    name: '',
    modules: [],
  }                                                                                                                                                                                                                                                                                                   
  const [projectDetails, setProjectDetails] = useState<TProjectDetails>({...initialProjectDetails})
  // const [showNewModule, setShowNewModule] = useState<boolean>(false)

  const onClick_createModuleTab = () => {
    dispatch(setShowCreateNewModule(true))
  }


  useEffect(() => {
    if(projectDetails.modules.length > 0) {
      const latestModule = projectDetails.modules[projectDetails.modules.length - 1]
      if(latestModule) {
      }
    }
  }, [projectDetails])

  useEffect(() => {
    setProjectDetails(ProjectState.value.project);
  }, [ProjectState.value.project])

  return (
    <div className={styles.Project}>
      <div className={styles.ProjectHeader}>
        <div className={styles.ProjectTitle}>
          <p>New Project</p>
        </div>
        <ul className={styles.ProjectTabs}>
          <li onClick={onClick_createModuleTab}><MdAdd /> Create a Module</li>
          {
            projectDetails.modules.map((module, index) => {
              let moduleTypeEnums: any = {};
              switch (module.class) {
                case moduleClassEnums.FRONTEND:
                  moduleTypeEnums = frontEndModuleClassTypeEnums;
                  break;
                default:
                  moduleTypeEnums = backEndModuleClassTypeEnums;
                  break;
              }
              return (
                <li key={index}>{moduleTypeEnums[module.class]}</li>
              );
            })
          }
        </ul>
      </div>
      <div className={styles.ProjectBody}>
        {
          ProjectState.value.showCreateNewModule && (
            <ProjectNewModule />
          )
        }
      </div>
    </div>
  )
}