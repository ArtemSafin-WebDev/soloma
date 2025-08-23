import divnaya from "./pages-data/divnaya";
import home from "./pages-data/home";
import mainteinance from "./pages-data/mainteinance";

const pagesConfig = {
  ...home,
  ...mainteinance,
  ...divnaya,
};

export default pagesConfig;
