import {CartData} from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTree,
    faGem,
    faTooth,
    faHandSpock,
    faStreetView
} from '@fortawesome/free-solid-svg-icons';

type VisitCartProps = CartData;

/**
 * Компонент-карточка, на котором будет выводится все
 * данные и настройки
 * @param {string} surname - Фамилия
 * @param {string} name - Имя
 * @param {string} number - Номер телефона
 * @param {string} adress - Адресс
 * @param {string} position - Должность
 * @param {string} logoId - id логотипа
 * @param {string} logoPosition - Позиционирование логотипа
 * @param {string} infoPosition - Позиционирование текста
 */
function VisitCart({
    name,
    surname,
    number,
    adress,
    position,
    logoId,
    logoPosition,
    infoPosition
}:VisitCartProps) {

    //Объект со всеми логотипами
    const iconsObj:{[key: string]: any} = { 
        'faTree': faTree, 
        'faGem':faGem, 
        'faTooth':faTooth , 
        'faHandSpock':faHandSpock, 
        'faStreetView':faStreetView
     };

    return <section className="visit-cart">
             <div className="visit-cart__content">
                {/* Логотип */}
                <div className={`visit-cart__logo visit-cart__logo--${logoPosition}`}>
                    <div className="visit-cart__logo-inner">
                        <FontAwesomeIcon icon={iconsObj[logoId]} />
                    </div>
                </div>

                {/* Информация */}
                <div className={`visit-cart__info visit-cart__info--${infoPosition}`}>
                    {/* Имя и фамилия */}
                    <div className="visit-cart__fullname">
                        <span className="visit-cart__name">
                            {name}
                        </span>
                        <span className="visit-cart__surname">
                            {surname}
                        </span>
                    </div>

                    {/* Должность */}
                    <div className="visit-cart__position">
                        <span>
                            {position}
                        </span>
                    </div>

                    {/* Адресс */}
                    <div className="visit-cart__adress">
                        <span>
                            {adress}
                        </span>
                    </div>

                    {/* Номер телефона */}
                    <div className="visit-cart__number">
                        <span>
                            {number}
                        </span>
                    </div>
                </div>
             </div>
           </section>;
}

export default VisitCart;