"use client";

import { useState } from 'react';
import Layout from '../pages/Layout';
import Security from '../components/security/Security'; // Adjust path as per your project structure

const index = () => {
  return (
    <Layout>
      <Security />
    </Layout>
  );
};

export default index;