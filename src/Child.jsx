import React from 'react'
import { UserContext } from './components/UserContext';

function Child() {
    const username = React.useContext(UserContext);
  return (
    <div>
        <h3 className='heading'>Child Component</h3>
        <p className='parag'>We have passed the data from parent app.js component to child</p>
        <p className='parag'>Hello {username}</p>
    </div>
  )
}
export default Child
