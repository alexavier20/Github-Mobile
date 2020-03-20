import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const route = createAppContainer(
  createStackNavigator({
    Main,
    User
  }, {        
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#EC7000',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      },
    }
  )
);

export default route;