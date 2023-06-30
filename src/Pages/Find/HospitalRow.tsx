import React from 'react';

type Props = {
  hospital: any;
};

const HospitalRow: React.FC<Props> = ({ hospital }) => {
  return (
    <div className="hospital-row">
      <div className="hospital-row__text-container">
        <p className="hospital-row__title">{hospital.name}</p>
        <p className="hospital-row__address">{hospital.address}</p>
        <div className="hospital-row__contact">
          <p>{hospital.email?.toLowerCase()}</p>
          <p>{hospital.phone}</p>
        </div>
      </div>

      <a
        target="_blank"
        href={`https://www.google.com/maps/@${hospital.latitude},${hospital.longitude},15z?entry=ttu`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </a>
    </div>
  );
};

export default HospitalRow;
