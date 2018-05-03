import {FETCH_PACKAGES} from './types';

export const fetchPackageDetails = () => dispatch  => {
            
  fetch('http://websource.shipwebsource.com/logiksys/courier-app-services/get-route-packages.php')
  .then(res => res.json())
  .then(data => dispatch({
      type: FETCH_PACKAGES,
      payload: data    
 }))
}
