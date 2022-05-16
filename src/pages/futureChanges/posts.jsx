import React from 'react';
import { checkToken } from '../../utilities/users-service';
import './drawings.css';

export default function OrderHistoryPage() {

  async function handleCheckToken() {
      console.log('hitting');
    const expDate = await checkToken();
    console.log(expDate);
  }












  return (
    <>
   
      <h1>Drawings</h1>
      </>
      
   
  );
}