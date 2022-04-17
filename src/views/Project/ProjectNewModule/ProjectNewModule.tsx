import React, { ChangeEvent, FormEvent, ReactEventHandler, useEffect, useState } from "react";
import { ReactChild, ReactChildren } from "react"
import { JsxElement } from "typescript"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { pushProjectModules, select_Project, setProject } from "../Project.slice";
import { backEndModuleClassTypeOptions, frontEndModuleClassTypeOptions, moduleClassEnums, moduleClassOptions, TProjectModule, TSelectOption } from "../Project.types";

import styles from './ProjectNewModule.module.scss';

interface IProjectNewModule {
  children?: ReactChildren | ReactChild | JsxElement | never[];
}

export const ProjectNewModule = (props: IProjectNewModule) => {
  const dispatch = useAppDispatch();
  const ProjectState = useAppSelector(select_Project);
  const [newModule, setNewModule] = useState<TProjectModule>({ class: 0, type: 0});
  const [moduleTypeOptions, setModuleTypeOptions] = useState<TSelectOption[]>([]);

  const onChange_moduleClassSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    const newModuleClassAndType = { ... newModule };
    newModuleClassAndType.class = Number(e.target.value);
    newModuleClassAndType.type = 0;
    setNewModule({ ...newModuleClassAndType });
  }

  const onChange_moduleTypeSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    const newModuleClassAndType = { ... newModule };
    newModuleClassAndType.type = Number(e.target.value);
    setNewModule({ ...newModuleClassAndType });
  }

  const onClick_saveModuleOptions = () => {
    dispatch(pushProjectModules(newModule))
  }

  const determineModuleTypeOptions = () => {
    switch (newModule.class) {
      case moduleClassEnums.FRONTEND:
        setModuleTypeOptions([...frontEndModuleClassTypeOptions])
        break;
      case moduleClassEnums.BACKEND:
        setModuleTypeOptions([...backEndModuleClassTypeOptions])
        break;
      default:
        setModuleTypeOptions([])
        break;
    }
  }

  useEffect(() => {
    determineModuleTypeOptions()
  }, [newModule])

  useEffect(() => {
  }, [ProjectState.value.project.modules])


  return (
    <div className={styles.ProjectNewModule}>
      <select onChange={onChange_moduleClassSelector} defaultValue={newModule.class}>
        <option value={0}>Select a Module Class</option>
        {
          moduleClassOptions.map((moduleClassOption, index)=>{
            return ( <option value={moduleClassOption.value} key={index}>{moduleClassOption.text}</option> )
            
          })
        }
      </select>
      <br />
      <select onChange={onChange_moduleTypeSelector} defaultValue={newModule.type}>
        <option value={0}>Select a Module Type</option>
        {
          moduleTypeOptions.map((moduleTypeOption, index)=>{
            return ( <option value={moduleTypeOption.value} key={index}>{moduleTypeOption.text}</option> )
            
          })
        }
      </select>
      <br />
      <button onClick={onClick_saveModuleOptions}>Save</button>
    </div>
  )
}