import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  loginScreenTextInput: {
    height: 40,
    width: 150,
  },
  loginScreenToast: {
    // backgroundColor: 'orange',
    backgroundColor: 'red',
  },
  modalScreenText: {
    fontSize: 30,
  },
});

export default AppStyle;
