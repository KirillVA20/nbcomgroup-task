export interface CartData {
    surname: string,
    name: string,
    number: string,
    adress: string,
    position: string,
    logoId: string,
    logoPosition: Position,
    infoPosition: Position
}

export type FormAction = {type: 'CHANGE_SETTING', settingName:string, value:string} |
                         {type: 'CLEAR_ALL_SETTINGS'};

export type Position = 'left' | 'right' | 'center';