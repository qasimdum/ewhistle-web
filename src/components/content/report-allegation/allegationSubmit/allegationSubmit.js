import React from 'react';
import {useHistory} from 'react-router-dom';

function AllegationSubmit() {
  const [trackingId, setTrackingId] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    const id = localStorage.getItem('trackingId');
    if(id) {
      setTrackingId(id)
    }else{
      history.push('/');
    }
    localStorage.removeItem('trackingId')
  }, []);
  return (
    <div className={'allegation_submit'}>
      <h2>Your allegation was submitted</h2>
      <h3>Your allegation tracking code is:</h3>
      <h1>{trackingId}</h1>
    </div>
  )
}
export default AllegationSubmit;
