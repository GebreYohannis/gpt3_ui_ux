import { Brand, Callout, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
} from "./containers";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className="App">
      <div className={styles.gradient__bg}>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <Callout />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
