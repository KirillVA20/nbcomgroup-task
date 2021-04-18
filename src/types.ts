
export interface CartData {
  surname: string;
  name: string;
  number: string;
  address: string;
  position: string;
  logoId: string;
  logoPosition: Position;
  infoPosition: Position;
}

export type FormAction = {
  type: string;
  settingName: string;
  value: string;
};

export type Position = "left" | "right" | "center";
