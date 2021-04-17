import { ActionType } from "./const";

export interface CartData {
  surname: string;
  name: string;
  number: string;
  adress: string;
  position: string;
  logoId: string;
  logoPosition: Position;
  infoPosition: Position;
}

export type FormAction = {
  type: ActionType.CHANGE_SETTING;
  settingName: string;
  value: string;
};

export type Position = "left" | "right" | "center";
