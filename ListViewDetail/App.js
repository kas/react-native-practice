import { StackNavigator } from 'react-navigation';

import DetailScreen from './components/DetailScreen';
import ListViewScreen from './components/ListViewScreen';

export default StackNavigator({ ListView: ListViewScreen, Detail: DetailScreen });
