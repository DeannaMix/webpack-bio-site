// import navbar from './navbar';
import buildProjects from './makeProjects';

import '../styles/main.scss';

const init = () => {
  buildProjects.buildProjects();
};

init();
