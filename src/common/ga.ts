import ReactGA from 'react-ga';
import { TRACKING_ID, GA_FLAG } from './contants';

ReactGA.initialize(TRACKING_ID, { titleCase: false, testMode: !GA_FLAG });

export const onClickAinizeLink = () => {
  ReactGA.event({
    category: 'spotainize_common',
    action: 'poweredby_click',
  });
};

export const onClickGithubLink = () => {
  ReactGA.event({
    category: 'spotainize_common',
    action: 'github_click',
  });
};

export const onClickStackLink = () => {
  ReactGA.event({
    category: 'spotainize_common',
    action: 'stackoverflow_click',
  });
};

export default ReactGA;
