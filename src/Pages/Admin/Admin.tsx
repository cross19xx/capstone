import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import './Admin.css';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState(false);
  const [regions, setRegions] = useState<any[]>([]);

  // Values saved
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [regionId, setRegion] = useState('');

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (!user) {
        // No user was found. Navigate back to the homepage
        navigate('/');
        return;
      }

      setLoggedIn(true);
    });
  }, [navigate]);

  useEffect(() => {
    if (!isLoggedIn) return;

    fetch(`https://carefinder-backend.vercel.app/api/regions`)
      .then((res) => res.json())
      .then((regions: any[]) => setRegions(regions));
  }, [isLoggedIn]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setDisabled(true);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const data = { name, email, phone, address, regionId };

    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    };

    fetch(`https://carefinder-backend.vercel.app/api/hospitals`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisabled(false);
      })
      .catch((error) => {
        setDisabled(false);
      });
  };

  if (!isLoggedIn) return null;

  return (
    <div className="admin-container">
      <h1>Welcome to the admin dashboard</h1>

      <div className="admin-body">
        <section className="admin-section">
          <h2>List of Hospitals</h2>
        </section>
        <section className="admin-aside">
          <h2>Add a new hospital</h2>
          <form onSubmit={handleSubmit} className="new-hospital-form">
            <input
              type="text"
              placeholder="Hospital Name"
              required
              className="new-hospital-input"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="new-hospital-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone number"
              required
              className="new-hospital-input"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="new-hospital-input"
              onChange={(e) => setAddress(e.target.value)}
            />

            <select
              className="new-hospital-input"
              value={regionId}
              onChange={(e) => setRegion(e.target.value)}>
              <option disabled value="">
                Select a region
              </option>
              {regions.map((region) => (
                <option value={region.id} key={region.id}>
                  {region.name} Region
                </option>
              ))}
            </select>

            <button type="submit" className="new-hospital-submit" disabled={isDisabled}>
              Create a new hospital
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Admin;
