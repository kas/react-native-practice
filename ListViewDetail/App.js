import { StackNavigator, SwitchNavigator } from 'react-navigation';

import DetailScreen from './components/DetailScreen';
import ListViewScreen from './components/ListViewScreen';
import LoadingScreen from './components/LoadingScreen';

const AppStack = StackNavigator({ ListView: ListViewScreen, Detail: DetailScreen });

export default SwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);
