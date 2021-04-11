import { useState } from 'react';

interface AddButtonProps {
    name:string ,
    number:string ,
    adress:string ,
}


/**
 * Компонент имитации оформления визитки
 * @param {string} name - Имя
 * @param {string} number - Номер телефона
 * @param {string} adress - Адресс
 */
function AddButton({
    name,
    number,
    adress,
}:AddButtonProps) {
    //Состояние отвечающие за статус оформления визитки
    const [cartIsOrder, setCartIsOrder] = useState(false);

    //Проверка на пустоту данных
    const checkEmptySetting = () => {
        return !!name && !!number && !!adress;
    }

    //Имитация оформления визитки
    const orderCart = () => {
        setCartIsOrder(true);
        setTimeout(() => setCartIsOrder(false), 3000);
    }

    //Класс активности кнопки оформления
    const addButtonClassName = (!checkEmptySetting()) 
                                    ? 'add-button__button--blocked' 
                                    : '';

    return <section className="add-button">
                <div className="add-button__container">
                    {(!cartIsOrder) 
                        ? <button className={`add-button__button ${addButtonClassName}`}
                                onClick={() => orderCart()}
                        >
                            Оформить
                        </button>
                        : <div className="add-button__message">
                            <span>
                                Спасибо, когда-нибудь мы оформим вашу визитку...
                            </span>
                          </div>
                    }
                </div>
           </section>
}

export default AddButton;