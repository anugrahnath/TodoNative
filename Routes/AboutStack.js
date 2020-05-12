import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from '../Screens/About';


const screen = {
    About : {
        screen : AboutScreen,
        navigationOptions : {
            title : 'About Us',
        },
    },
}

const AboutStack = createStackNavigator(screen)

export default AboutStack;