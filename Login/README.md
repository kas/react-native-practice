# Login

This project demonstrates a login flow. It starts in `AuthLoadingScreen`, which attempts to load a saved username from AsyncStorage while displaying a loading icon. If the username wasn't found, then `LoginScreen` is shown. If the username was found, then `HomeScreen` is shown. `LoginScreen` has username and password fields, and Log In, Sign Up, and Forgot Password buttons. If the user typed the correct username and password, and presses the Log In button, then `HomeScreen` is shown. If the username or password was typed incorrectly, and the user presses the Log In button, then a red error toast is shown, telling the user that Authentication failed, and the correct username and password. `HomeScreen` shows the username and has a Log Out button. If the user presses the Log Out button, then AsyncStorage is cleared and `LoginScreen` is shown.

## Images

![](https://raw.githubusercontent.com/kas/react-native-practice/master/Login/images/LoginScreen.png)

![](https://raw.githubusercontent.com/kas/react-native-practice/master/Login/images/LoginScreenAuthenticationFailed.png)

![](https://raw.githubusercontent.com/kas/react-native-practice/master/Login/images/HomeScreen.png)
