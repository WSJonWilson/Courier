import { AppRegistry } from 'react-native';
import App from './App';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Failed prop type: ',
    'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
  ]);

AppRegistry.registerComponent('CourierApp', () => App);
