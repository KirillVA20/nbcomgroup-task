import { CartData } from "../../types";
import FormInput from "./FormItems/FromInput";
import FormSelect from "./FormItems/FormSelect";
import FormSelectIconProps from "./FormItems/FormSelectIcon";
import AddButton from "../addButton/AddButton";

interface StateActionProps {
  changeSetting(settingName: string, value: string): void;
}

type FormProps = CartData & StateActionProps;

/**
 * Форма настройки и изменения данных визитки
 * @param surname - Фамилия
 * @param name - Имя
 * @param number - Номер телефона
 * @param adress - Адресс
 * @param position - Должность
 * @param logoId - id логотипа
 * @param logoPosition - Позиционирование логотипа
 * @param infoPosition - Похиционирование текста
 */
const Form = ({
  changeSetting,
  surname,
  name,
  number,
  adress,
  position,
  logoId,
  logoPosition,
  infoPosition,
}: FormProps) => {
  //Массив с данными для корректного вывода полей настроек
  const FormInputNames = [
    { 
      value: name, 
      name: "name", 
      lang: "Имя", 
      placheholder: "Введите имя" },
    {
      value: surname,
      name: "surname",
      lang: "Фамилия",
      placheholder: "Введите фамилию",
    },
    {
      value: number,
      name: "number",
      lang: "Номер телефона",
      placheholder: "Введите номер",
    },
    {
      value: position,
      name: "position",
      lang: "Должность",
      placheholder: "Введите должность",
    },
    {
      value: adress,
      name: "adress",
      lang: "Адрес",
      placheholder: "Введите адрес",
    },
  ];
  return (
    <section className="form">
      <div className="form__container">
        <h2 className="form__title">Настройки</h2>
        <form action="" className="form__form">
          <fieldset>
            <div className="form__inner">
              {/* Блок с быкновенными полями ввода */}
              <div className="form__inputs">
                {FormInputNames.map((setting, index) => (
                  <FormInput
                    settingName={setting.name}
                    settingNameLang={setting.lang}
                    value={setting.value}
                    placeholder={setting.placheholder}
                    changeSetting={changeSetting}
                    key={index}
                  />
                ))}
              </div>

              {/* Блок с настройкой-списком иконок */}
              <div className="form__logo">
                <FormSelectIconProps
                  settingName="logoId"
                  value={logoId}
                  changeSetting={changeSetting}
                />
              </div>

              {/* Блок с настройками-списками*/}
              <div className="form__positions">
                <FormSelect
                  variants="left|center|right"
                  variantsLang="Слева|По центру|Справа"
                  value={logoPosition}
                  settingName="logoPosition"
                  changeSetting={changeSetting}
                  title="Позиционирование логотипа"
                  key="logoPosition"
                />
                <FormSelect
                  variants="left|center|right"
                  variantsLang="Слева|По центру|Справа"
                  value={infoPosition}
                  settingName="infoPosition"
                  title="Позиционирование контента"
                  changeSetting={changeSetting}
                  key="infoPosition"
                />
              </div>
            </div>
            <AddButton name={name} number={number} adress={adress} />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Form;
