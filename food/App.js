import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);