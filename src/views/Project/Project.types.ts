export type TProjectModule = {
  class: number;
  type: number;
}

export type TProjectDetails = {
  id: number;
  name: string;
  modules: TProjectModule[];
}

export enum moduleClassEnums {
  FRONTEND = 1,
  BACKEND
}

export type TSelectOption = {
  text: string;
  value: number;
}

export const moduleClassOptions = [
  { text: 'Front-End', value: moduleClassEnums.FRONTEND },
  { text: 'Back-End', value: moduleClassEnums.BACKEND }
]


export enum frontEndModuleClassTypeEnums {
  WEBSITE = 1,
  WEB_APP,
  APP
}

export const frontEndModuleClassTypeOptions = [
  { text: 'Website', value: frontEndModuleClassTypeEnums.WEBSITE},
  { text: 'Web App', value: frontEndModuleClassTypeEnums.WEB_APP},
  { text: 'App', value: frontEndModuleClassTypeEnums.APP},
]

export enum backEndModuleClassTypeEnums {
  DATA_STORAGE = 1,
  DATA_CONNECTION,
  BATCH_PROCESS
}

export const backEndModuleClassTypeOptions = [
  { text: 'Data Storage', value: backEndModuleClassTypeEnums.DATA_STORAGE},
  { text: 'Data Connection', value: backEndModuleClassTypeEnums.DATA_CONNECTION},
  { text: 'Batch Process', value: backEndModuleClassTypeEnums.BATCH_PROCESS},
]