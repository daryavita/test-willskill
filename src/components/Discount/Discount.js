import "./Discount.css";
import ginger from "../../images/ginger.svg";
import nootris from "../../images/nootris-rotate.svg";
import virus from "../../images/vorus.svg";

function Discount() {
  return (
    <section className="discount">
      <h2 className="discount__title">
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
        <br />
        <span className="discount__title discount__title_orange">
          СО СКИДКОЙ -15% ПЕРВЫМ!
        </span>
      </h2>
      <div className="discount__price">
        <p className="discount__price-old">750₽</p>
        <p className="discount__prise-new">690₽</p>
      </div>

      <ul className="discount__benefits-list">
        <li className="discount__benefit">
          <img className="discount__img-ginger" src={ginger} alt="имбирь"></img>
          <p className="discount__subtitle">Содержит </p>
          <p className="discount__subtitle discount__subtitle_orange">имбирь</p>
        </li>
        <li className="discount__benefit">
            <img
              className="discount__img-nootris"
              src={nootris}
              alt="нутрис"
              transform='rotate(-90deg)'
            ></img>
          <p className="discount__subtitle discount__subtitle_big">
            + Бесплатная доставка
          </p>
          <p className="discount__text">Специальная цена</p>
        </li>
        <li className="discount__benefit">
          <img className="discount__img-virus" src={virus} alt="лимон"></img>
          <p className="discount__subtitle">Нейтрализует</p>
          <p className="discount__subtitle discount__subtitle_orange">вирусы</p>
        </li>
      </ul>

      <button
        className="discount__btn"
        aria-label="ОФормить заказ"
        type="button"
      >
        Оформить заказ!
      </button>
    </section>
  );
}

export default Discount;
