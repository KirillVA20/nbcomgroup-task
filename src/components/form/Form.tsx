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
  return (
    <section className="form">
      <div className="form__container">
        <h2 className="form__title">Настройки</h2>
        <form action="" className="form__form">
          <fieldset>
            <div className="form__inner">
              {/* Блок с быкновенными полями ввода */}
              <div className="form__inputs">
                <FormInput
                  settingName="name"
                  settingNameLang="Имя"
                  value={name}
                  placeholder="Введите имя"
                  changeSetting={changeSetting}
                  key="name"
                />
                <FormInput
                  settingName="surname"
                  settingNameLang="Фамилия"
                  value={surname}
                  placeholder="Введите фамилию"
                  changeSetting={changeSetting}
                  key="surname"
                />
                <FormInput
                  settingName="number"
                  settingNameLang="Номер телефона"
                  value={number}
                  placeholder="Номер телефона"
                  changeSetting={changeSetting}
                  key="number"
                />
                <FormInput
                  settingName="position"
                  settingNameLang="Должность"
                  value={position}
                  placeholder="Введите должность"
                  changeSetting={changeSetting}
                  key="position"
                />
                <FormInput
                  settingName="adress"
                  settingNameLang="Адрес"
                  value={adress}
                  placeholder="Введите адрес"
                  changeSetting={changeSetting}
                  key="adress"
                />
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
            <AddButton 
              name={name} 
              number={number} 
              adress={adress} 
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Form;
