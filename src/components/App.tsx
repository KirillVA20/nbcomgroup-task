import './App.scss';
import { useReducer } from "react";
import VisitCart from "./VisitCart/VisitCart";
import Form from "./form/Form";
import { CartData, FormAction } from "../types";
import { ActionType } from "../const";

type InitialStateProps = CartData;

//Объект данных визитки
const initialState: InitialStateProps = {
  surname: "Воронкин",
  name: "Кирилл",
  number: "+7 (999) 999-99-99",
  address: "Манежный пер., 2",
  position: "Веб-разработчик",
  logoId: "faTree",
  logoPosition: "left",
  infoPosition: "left",
};

const reducer = (state = initialState, action: FormAction) => {
  switch (action.type) {
    case ActionType.CHANGE_SETTING:
      return {
        ...state,
        [action.settingName]: action.value,
      };

    default:
      return state;
  }
};

/**
 * Комопнент, хранящий весь контент приложения
 */
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Функиця-обертка изменения данных визитки
  const changeSetting = (settingName: string, value: string) => {
    const type = "CHANGE_SETTING";
    dispatch({ type, settingName, value });
  };

  return (
    <main className="app">
      <h1 className="app__title">Генератор визитной карточки</h1>

      <VisitCart {...state} />

      <Form {...state} changeSetting={changeSetting} />
    </main>
  );
};

export default App;
