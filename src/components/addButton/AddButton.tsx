import './AddButton.scss';
import { useState } from "react";
import { CartOrderTimer } from "../../const";

interface AddButtonProps {
  name: string;
  number: string;
  address: string;
}

/**
 * Компонент имитации оформления визитки
 * @param name - Имя
 * @param number - Номер телефона
 * @param address - Адресс
 */
const AddButton = ({ name, number, address }: AddButtonProps) => {
  //Состояние отвечающие за статус оформления визитки
  const [cartIsOrder, setCartIsOrder] = useState(false);

  //Проверка на пустоту данных
  const checkEmptySetting = () => {
    return !!name && !!number && !!address;
  };

  //Имитация оформления визитки
  const orderCart = () => {
    setCartIsOrder(true);
    setTimeout(() => setCartIsOrder(false), CartOrderTimer);
  };

  //Класс активности кнопки оформления
  const addButtonClassName = !checkEmptySetting()
    ? "add-button__button_blocked"
    : "";

  return (
    <div className="add-button">
      <div className="add-button__container">
        {!cartIsOrder ? (
          <button
            type="submit"
            className={`add-button__button ${addButtonClassName}`}
            onClick={orderCart}
          >
            Оформить
          </button>
        ) : (
          <div className="add-button__message">
            <span>Спасибо, когда-нибудь мы оформим вашу визитку...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddButton;
