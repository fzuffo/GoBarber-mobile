import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SigIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
