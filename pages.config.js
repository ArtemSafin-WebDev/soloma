import divnaya from "./pages-data/divnaya";
import home from "./pages-data/home";
import mainteinance from "./pages-data/mainteinance";
import program from "./pages-data/program";
import about from "./pages-data/about";
import tihaya from "./pages-data/tihaya";
import contacts from "./pages-data/contacts";
import womensClub from "./pages-data/womens-club";
import mensClub from "./pages-data/mens-club";
import certificates from "./pages-data/certificates";
import kitchen from "./pages-data/kitchen";
import certificate from "./pages-data/certificate";
import events from "./pages-data/events";

const pagesConfig = {
  ...home,
  ...mainteinance,
  ...divnaya,
  ...program,
  ...about,
  ...tihaya,
  ...contacts,
  ...mensClub,
  ...womensClub,
  ...certificates,
  ...kitchen,
  ...certificate,
  ...events,
};

export default pagesConfig;
