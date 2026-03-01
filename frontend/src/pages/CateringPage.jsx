import React from 'react';
import Navbar from '../components/Navbar';
import CateringForm from '../components/CateringForm';

const CateringPage = () => (
  <>
    <Navbar />
    <main className="catering-page-main">
      <CateringForm />
    </main>
  </>
);

export default CateringPage;
