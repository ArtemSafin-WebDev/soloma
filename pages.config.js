import divnaya from "./pages-data/divnaya";
import home from "./pages-data/home";
import mainteinance from "./pages-data/mainteinance";
import program from "./pages-data/program";
import about from "./pages-data/about";
import tihaya from "./pages-data/tihaya";
import contacts from "./pages-data/contacts";

const pagesConfig = {
  ...home,
  ...mainteinance,
  ...divnaya,
  ...program,
  ...about,
  ...tihaya,
  ...contacts,
};

export default pagesConfig;
