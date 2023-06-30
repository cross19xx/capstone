import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import MarkdownEditor from '../../Components/MarkdowmEditor/MarkdownEditor';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Find.css';
import HospitalRow from './HospitalRow';

const Find: React.FC = () => {
  const [search, setSearch] = useSearchParams();

  const [isLoading, setLoading] = useState(false);
  const [hospital, setHospital] = useState<any>();
  const [regions, setRegions] = useState<any[]>([]);
  const [type, setType] = useState<'hospital' | 'region'>();

  useEffect(() => {
    const id = search.get('id');
    const region = search.get('region');

    if (id) {
      fetch(`https://carefinder-backend.vercel.app/api/hospitals/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setType('hospital');
          setHospital(res);
        })
        .catch((error) => {
          setType('hospital');
          setLoading(false);
          console.error(error);
        });
    }

    if (region) {
      fetch(`https://carefinder-backend.vercel.app/api/hospitals?region=${region}`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setType('region');
          setRegions(res);
        })
        .catch((error) => {
          setType('region');
          setLoading(false);
          console.error(error);
        });
    }
  }, [search]);

  const id = search.get('id');
  const region = search.get('region');

  return (
    <div className="find-content">
      <SearchBar />
      <div>
        {type === 'region' && (
          <h2 className="find-title">
            Showing the hospitals in the region{' '}
            <a
              className="download-button"
              href={`https://carefinder-backend.vercel.app/api/hospitals?region=${region}&output=csv`}>
              Download
            </a>
          </h2>
        )}
        {type === 'hospital' && (
          <h2 className="find-title">
            Showing details of the hospital{' '}
            <a
              className="download-button"
              href={`https://carefinder-backend.vercel.app/api/hospitals/${id}?output=csv`}>
              Download
            </a>
          </h2>
        )}

        {type === 'region' && regions.length === 0 && <div>No hospitals found in this region</div>}
        {type === 'hospital' && !hospital?.id && <div>No hospital found with this id</div>}

        <div className="hospital-container">
          {type === 'region' &&
            regions.length > 0 &&
            regions.map((region) => <HospitalRow hospital={region} />)}

          {type === 'hospital' && hospital?.id && <HospitalRow hospital={hospital} />}
        </div>
      </div>
    </div>
  );
};

export default Find;
