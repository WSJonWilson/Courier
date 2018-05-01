import { AppRegistry } from 'react-native';
import App from './App';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',

    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Failed prop type: ',
    'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
    'Warning: Setting a timer for a long period of time, i.e multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake,'
  ]);

AppRegistry.registerComponent('CourierApp', () => App);
