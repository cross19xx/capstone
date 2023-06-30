import React, { useEffect, useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import { useDebounce } from '../../Hooks/use-debounce';
import HospitalList from '../../Components/HospitalList/HospitalList';

type ResultType = { type: 'region' | 'hospital'; data: any[] };

const Home = () => {
  const [locationQuery, setLocationQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<ResultType>();
  const [hospitals, setHospitals] = useState([]);

  const debouncedLocationQuery = useDebounce(locationQuery, 1000);
  const debouncedNameQuery = useDebounce(nameQuery, 1000);

  const handleSearch = async (term: string) =>
    new Promise((resolve, reject) => {
      setLoading(true);

      fetch(`https://carefinder-backend.vercel.app/api/search?term=${term}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });

  useEffect(() => {
    if (debouncedLocationQuery.length < 3) return;
    handleSearch(debouncedLocationQuery).then((data) =>
      setResults({ type: 'region', data: (data as any).hospitals as any[] }),
    );
  }, [debouncedLocationQuery]);

  useEffect(() => {
    if (debouncedNameQuery.length < 3) return;
    handleSearch(debouncedNameQuery).then((data) =>
      setResults({ type: 'hospital', data: (data as any).hospitals as any[] }),
    );
  }, [debouncedNameQuery]);

  return (
    <div className="for-home">
      <div className="content">
        <h1 className="home-head">
          <span className="highlight">Find the hospital</span> you want
        </h1>
        <h2 className="home-c">easily and quickly at just a click</h2>

        <p className="home-p">The easiest and fastest to get your desired hospital online</p>

        <SearchBar />

        {/* {!results?.type && (
          <div>
            <h2>
              All hospitals available{' '}
              <a
                target="_blank"
                href="https://carefinder-backend.vercel.app/api/hospitals?output=csv">
                Download
              </a>
            </h2>
          </div>
        )} */}
      </div>

      <div className="footer">
        <div className="footer-icons">
          <a target="_blank" href="https://bit.ly/3WCeSG2">
            <FaGithub />
          </a>
          <a target="_blank" href="https://bit.ly/3WZhHRj">
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://bit.ly/3winMwM">
            <FaTwitter />
          </a>
        </div>

        <p className="footer-p">© 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Home;
