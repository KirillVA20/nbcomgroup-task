import { CartData } from "../../types";
import FormInput from "./FormItems/FromInput";
import FormSelect from "./FormItems/FormSelect";
import FormSelectIconProps from "./FormItems/FormSelectIcon";

interface StateActionProps {
  changeSetting(settingName: string, value: string): void;
}

type FormProps = CartData & StateActionProps;

/**
 * Форма настройки и изменения данных визитки
 * @param {string} surname - Фамилия
 * @param {string} name - Имя
 * @param {string} number - Номер телефона
 * @param {string} adress - Адресс
 * @param {string} position - Должность
 * @param {string} logoId - id логотипа
 * @param {string} logoPosition - Позиционирование логотипа
 * @param {string} infoPosition - Похиционирование текста
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
      </div>
    </section>
  );
};

export default Form;
