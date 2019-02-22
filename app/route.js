import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./home";
import AuthLoadingScreen from "./authentication/authLoadingScreen";
import SignInScreen from "./authentication/signIn";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
