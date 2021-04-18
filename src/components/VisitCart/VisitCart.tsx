import './VisitCart.scss';
import { CartData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faGem,
  faTooth,
  faHandSpock,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import InfoItem from "./InfoItem/InfoItem";


type VisitCartProps = CartData;

/**
 * Компонент-карточка, на котором будет выводится все
 * данные и настройки
 * @param surname - Фамилия
 * @param name - Имя
 * @param number - Номер телефона
 * @param adress - Адресс
 * @param position - Должность
 * @param logoId - id логотипа
 * @param logoPosition - Позиционирование логотипа
 * @param infoPosition - Позиционирование текста
 */
const VisitCart = ({
  name,
  surname,
  number,
  adress,
  position,
  logoId,
  logoPosition,
  infoPosition,
}: VisitCartProps) => {
  //Объект со всеми логотипами
  const iconsObj: { [key: string]: any } = {
    faTree: faTree,
    faGem: faGem,
    faTooth: faTooth,
    faHandSpock: faHandSpock,
    faStreetView: faStreetView,
  };

  return (
    <section className="visit-cart">
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
            <span className="visit-cart__name">{name}</span>
            <span className="visit-cart__surname">{surname}</span>
          </div>

          {/* Должность */}
          <InfoItem value={position} />

          {/* Адресс */}
          <InfoItem value={adress} />

          {/* Адресс */}
          <InfoItem value={number} />
        </div>
      </div>
    </section>
  );
};

export default VisitCart;
