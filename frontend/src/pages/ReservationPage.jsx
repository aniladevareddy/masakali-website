import React from 'react';
import Navbar from '../components/Navbar';
import ReservationForm from '../components/ReservationForm';

const ReservationPage = () => (
  <>
    <Navbar />
    <main className="reservation-page-main">

      <ReservationForm />
    </main>
  </>
);

export default ReservationPage;
