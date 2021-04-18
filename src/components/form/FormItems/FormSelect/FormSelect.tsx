import './FormSelect.scss';
import { ReactNode } from "react";

interface FormSelectProps {
  changeSetting(settingName: string, value: string): void;
  settingName: string;
  variants: string;
  variantsLang: string;
  value: string;
  title: string;
}

/**
 * Компонент с выбором настройки
 * @param settingName - Имя настройки
 * @param variants - Варианты настройки
 * @param variantsLang - Перевод вариантов настройки
 * @param value - Значение настройки
 * @param title - Текст для заголовка
 */
const FormSelect = ({
  changeSetting,
  settingName,
  variants,
  variantsLang,
  value,
  title,
}: FormSelectProps) => {
  //Функция-обертка для изменения настройки
  const changeSettingHandler = (settingName: string, value: string) => {
    changeSetting(settingName, value);
  };

  //Функция генерации вариантов
  const generateOptions = (): Array<ReactNode> => {
    let taskList: Array<ReactNode> = [];

    //Получаем массивы и строк с вариантами настроек и их переводом
    const variantsArr = variants.split("|"),
      variantsLangArr = variantsLang.split("|");

    //Циклом добавляем варианты в массив вариантов
    for (let i = 0; i < variantsArr.length; i++) {
      const variant = variantsArr[i],
        variantLang = variantsLangArr[i],
        activeClassName = variant === value ? "form-select__item_active" : "";

      const option = (
        <div
          key={i}
          className={`form-select__item ${activeClassName}`}
          onClick={() => changeSettingHandler(settingName, variant)}
        >
          <span>{variantLang}</span>
        </div>
      );

      taskList.push(option);
    }

    return taskList;
  };

  return (
    <div className="form-select">
      <div className="form-select__container">
        <h4 className="form-select__title">{title}</h4>

        <ul className="form-select__list">{generateOptions()}</ul>
      </div>
    </div>
  );
};

export default FormSelect;
