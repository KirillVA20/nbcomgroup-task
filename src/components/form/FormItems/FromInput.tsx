import { useRef } from "react";

interface FormInputProps {
  changeSetting(settingName: string, value: string): void;
  settingName: string;
  settingNameLang: string;
  value: string;
  placeholder: string;
}

/**
 * Компонент обыкновенной настройки
 * @param settingName - Имя настройки
 * @param settingNameLang - Имя-перевод
 * @param value - Значение настройки
 * @param placeholder - Текст для плейсхолдера
 */
const FormInput = ({
  changeSetting,
  settingName,
  settingNameLang,
  value,
  placeholder,
}: FormInputProps) => {
  const inputRef = useRef();

  //Функция-обертка для изменения данных
  const changeSettingHandler = (settingName: string) => {
    const settingInput: HTMLInputElement = inputRef.current;
    changeSetting(settingName, settingInput.value);
  };

  return (
    <div className="setting">
      <label htmlFor={settingName} className="setting__label">
        {settingNameLang}
      </label>

      <input
        type="text"
        defaultValue={value}
        className="setting__input"
        name={settingName}
        onInput={() => changeSettingHandler(settingName)}
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  );
};

export default FormInput;
