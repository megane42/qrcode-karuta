import { render }    from 'react-dom';
import { Container } from 'flux/utils';
import { AppRoot }   from './components/root'

const AppContainer = Container.create(AppRoot);

// ReactDom
render(
  <AppContainer />,
  document.getElementById('content')
);
