import { createSlice} from '@reduxjs/toolkit'
import { IRootState } from '../../store';
import { TProjectDetails } from './Project.types';


export interface IProjectState {
  value: {
    project: TProjectDetails;
    showCreateNewModule: boolean;
  }
}

const initialState = {
  value: {
    project: {
      id: 0,
      name: '',
      modules: [],
    },
    showCreateNewModule: false,
  }
} as IProjectState

const ProjectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    setProject(state, action){
      state.value.project = action.payload;
    },
    pushProjectModules(state, action){
      state.value.project.modules.push(action.payload)
    },
    setShowCreateNewModule(state, action){
      state.value.showCreateNewModule = action.payload
    }
  },
})


export const { setProject, setShowCreateNewModule, pushProjectModules } = ProjectSlice.actions

export const select_Project = (state: IRootState) => state.Project;

export default ProjectSlice.reducer