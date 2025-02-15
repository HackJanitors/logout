"use client"
import React from 'react';

const Namecard = ({ name }) => {
    return (
        <div className="text-6xl font-bold">Welcome, {name}</div>
  );
};

export default Namecard;