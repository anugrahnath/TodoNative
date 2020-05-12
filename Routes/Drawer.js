import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SignInStack from './SignInStack';
import AboutStack from './AboutStack';

// stack  rm -rf .expo



// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: SignInStack,
    },
    About: {
      screen: AboutStack,
    },
  });
  
  export default createAppContainer(RootDrawerNavigator);