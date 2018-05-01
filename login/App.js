import { StackNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ModalScreen from './components/ModalScreen';
import SignUpScreen from './components/SignUpScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import OtherScreen from './components/OtherScreen';

const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const RootAppStack = StackNavigator(
  {
    App: {
      screen: AppStack,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  { mode: 'modal', headerMode: 'none' },
);
const AuthStack = StackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootAppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
