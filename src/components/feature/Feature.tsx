import featurStyles from "./Feature.module.css";
interface Props {
  title: string;
  text: string;
}

const Feature = ({ title, text }: Props) => {
  return (
    <div className={featurStyles.gpt3__features__container__feature}>
      <div className={featurStyles.gpt3__features__container__feature__text}>
        <div />
        <h2>{title}</h2>
      </div>
      <div className={featurStyles.gpt3__features__container__feature__text}>
        {text}
      </div>
    </div>
  );
};

export default Feature;
