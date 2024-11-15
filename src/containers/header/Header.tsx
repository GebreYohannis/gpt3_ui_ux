import generalStyles from "../../App.module.css";
import { ai, people } from "../../assets/Image";
import headerStyles from "./Header.module.css";
const Header = () => {
  return (
    <div
      className={[
        headerStyles.hero,
        generalStyles.gradient__bg,
        generalStyles.section__padding,
      ].join(" ")}
      id="home"
    >
      <div className={headerStyles.hero__content}>
        <h1 className={generalStyles.gradient__text}>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <div className="hero__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sequi voluptatum modi assumenda maxime sapiente quod alias
            aspernatur quam distinctio ea, rem facilis aliquid temporibus
            dolorum tempore voluptates asperiores? Assumenda.{" "}
          </p>
        </div>
        <div className={headerStyles.hero__content__input}>
          <input type="email" name="" id="" placeholder="Your E-mail address" />
          <button type="button">Get Started</button>
        </div>
        <div className={headerStyles.hero__content__people}>
          <img src={people} alt="people" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ipsa.
          </p>
        </div>
      </div>
      <div className={headerStyles.hero__image}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
