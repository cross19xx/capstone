import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

type SearchProps = { value: string; label: string };

function SearchBar() {
  const navigate = useNavigate();

  const [allHospitals, setAllHospitals] = useState<any[]>([]);
  const [hospitals, setHospitals] = useState<SearchProps[]>([]);
  const [regions, setRegions] = useState<SearchProps[]>([]);

  useEffect(() => {
    fetch(`https://carefinder-backend.vercel.app/api/hospitals`)
      .then((res) => res.json())
      .then((data) => {
        const _hospitals = data.map((datum: any) => ({ value: datum.id, label: datum.name }));
        setHospitals(_hospitals);
        setAllHospitals(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`https://carefinder-backend.vercel.app/api/regions`)
      .then((res) => res.json())
      .then((data) => {
        const _regions = data.map((datum: any) => ({ value: datum.id, label: datum.name }));
        setRegions(_regions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleHospitalSelect = ({ value }: any) => {
    navigate(`/find?id=${value}`);
  };

  const handleLocationSelect = ({ value }: any) => {
    navigate(`/find?region=${value}`);
  };

  return (
    <div className="search-container">
      <div className="input-container">
        <Select
          placeholder="Hospital Name"
          className="search-input name-input"
          options={hospitals}
          onChange={handleHospitalSelect}
        />
        <div className="input-divider" />

        <Select
          placeholder="Location"
          className="search-input location-input"
          options={regions}
          isClearable
          onChange={handleLocationSelect}
        />
      </div>
    </div>
  );
}

export default SearchBar;
