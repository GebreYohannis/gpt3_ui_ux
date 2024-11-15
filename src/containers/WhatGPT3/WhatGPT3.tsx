import { Feature } from "../../components";
import gpt3Styles from "./WhatGPT3.module.css";
const WhatGPT3 = () => {
  return (
    <div
      className={[gpt3Styles.gpt3__whatgpt3, gpt3Styles.section__margin].join(
        " "
      )}
      id="whatgpt3"
    >
      <div className={gpt3Styles.gpt3__whatgpt3__feature}>
        <Feature />
      </div>
      <div className={gpt3Styles.gpt3__whatgpt3__heading}>
        <h2 className={gpt3Styles.gradient__text}>
          The Possiblities are beyond your imagination
        </h2>
        <p>Explore The Library</p>
      </div>
      <div className={gpt3Styles.gpt3__whatgpt3__container}>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};
export default WhatGPT3;
