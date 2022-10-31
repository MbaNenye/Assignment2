
import React, { useEffect, useState } from 'react';
import Users from '../component/users';

const user = fetch('https://randomuser.me/api/')

function User() {
  return (
    <div>
      <h1> user{user}</h1>
    </div>
  )
}

export default User;
