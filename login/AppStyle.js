import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenToast: {
    backgroundColor: 'red',
    // backgroundColor: 'orange',
  },
  loginScreenTextInput: {
    height: 40,
    width: 150,
  },
  modalScreenText: {
    fontSize: 30,
  },
});

export default AppStyle;
