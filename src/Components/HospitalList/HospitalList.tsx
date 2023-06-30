import React from 'react';

type Props = {
  hospitals: {
    regionId: number;
    id: string;
    name: string;
    phone: string;
    email: string;
    description?: string;
    address: string;
    longitude: string;
    latitude: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

const HospitalList: React.FC<Props> = ({ hospitals }) => {
  if (hospitals.length === 0) {
    return (
      <div>
        <h1>No hospitals found</h1>
      </div>
    );
  }

  return (
    <>
      {hospitals.map((hospital) => (
        <div key={hospital.id}>
          <p>{hospital.name}</p>
          <p>{hospital.description}</p>
        </div>
      ))}
    </>
  );
};

export default HospitalList;