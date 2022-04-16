import { createSlice} from '@reduxjs/toolkit'
import { IRootState } from '../../store';



export interface ISideMenuState {
  value: {
    SideMenuOpened: boolean;
  }
}

const initialState = {
  value: {
    SideMenuOpened: false,
  }
} as ISideMenuState

const SideMenuSlice = createSlice({
  name: 'SideMenu',
  initialState,
  reducers: {
    SideMenu_Toggle(state){
      state.value.SideMenuOpened = !state.value.SideMenuOpened;
    },
  },
})


export const { SideMenu_Toggle } = SideMenuSlice.actions

export const select_SideMenu = (state: IRootState) => state.SideMenu;

export default SideMenuSlice.reducer