import divnaya from "./pages-data/divnaya";
import home from "./pages-data/home";
import mainteinance from "./pages-data/mainteinance";
import program from "./pages-data/program";
import about from "./pages-data/about";

const pagesConfig = {
  ...home,
  ...mainteinance,
  ...divnaya,
  ...program,
  ...about,
};

export default pagesConfig;
