import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faGem,
  faTooth,
  faHandSpock,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

interface FormSelectIconProps {
  changeSetting(settingName: string, value: string): void;
  settingName: string;
  value: string;
}

/**
 * Компонент с выбором настройки
 * @param {string} settingName - Имя настройки
 * @param {string} value - Значение настройки
 */
const FormSelectIconProps = ({
  changeSetting,
  settingName,
  value,
}: FormSelectIconProps) => {
  //Объект со всеми вариантами логотипа
  const iconsObj: { [key: string]: any } = {
    faTree: faTree,
    faGem: faGem,
    faTooth: faTooth,
    faHandSpock: faHandSpock,
    faStreetView: faStreetView,
  };

  //Функция-обертка для изменения настройки
  const changeSettingHandler = (value: string) => {
    changeSetting(settingName, value);
  };

  //Функция генерации вариантов логотипа
  const renderFormIcons = (): Array<ReactNode> => {
    let iconList: Array<ReactNode> = [];

    //Циклом добавляем все варианты в массив вариантов
    Object.keys(iconsObj).forEach((icon, index) => {
      //Если вариант равен значению настройки -
      //делаем его активным
      const activeClass = icon === value ? "form-icons__item--active" : "";

      const iconButton = (
        <li
          key={index}
          className={`form-icons__item ${activeClass}`}
          onClick={() => changeSettingHandler(icon)}
        >
          <FontAwesomeIcon icon={iconsObj[icon]} />
        </li>
      );

      iconList.push(iconButton);
    });

    return iconList;
  };

  return (
    <div className="form-icons">
      <div className="form-icons__title">
        <span>Логотип</span>
      </div>

      <ul className="form-icons__list">{renderFormIcons()}</ul>
    </div>
  );
};

export default FormSelectIconProps;
