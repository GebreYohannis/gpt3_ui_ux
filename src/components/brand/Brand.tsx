import brandStyles from "./Brand.module.css";

import { atlassian, dropbox, google, shopify } from "../../assets/Image";

const Brand = () => {
  return (
    <div
      className={[brandStyles.brand, brandStyles.section__padding].join(" ")}
    >
      <div className={brandStyles.brand__img__container}>
        <img src={google} alt="Google" />
      </div>
      <div className={brandStyles.brand__img__container}>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div className={brandStyles.brand__img__container}>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div className={brandStyles.brand__img__container}>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
