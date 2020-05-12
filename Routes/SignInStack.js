import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../Screens/SignIn';
import SignUpScreen from '../Screens/SignUp';
import HomeScreen from '../Screens/Home';
import ToDoMasterScreen from '../Screens/ToDo';
import ReviewsMaster from '../Screens/Reviews';
import ReviewDetailsMaster from '../Screens/ReviewDetails';

const screens = {
    Home :{
        screen : HomeScreen,
        navigationOptions: {
            title: "Home Development",
           // headerShown : false,
            
          },
    },
    SignIn: {
        screen : SignInScreen,
    },
    SignUp : {
        screen: SignUpScreen,
    },
    TODO : {
        screen: ToDoMasterScreen,
    },
    Reviews : {
        screen: ReviewsMaster,
    },
    ReviewDetails : {
        screen: ReviewDetailsMaster,
    }

};

 


const SignInStack = createStackNavigator(screens);

export default SignInStack;