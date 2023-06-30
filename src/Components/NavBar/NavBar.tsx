import React, { useEffect, useMemo, useState } from 'react';
import { getAuth } from 'firebase/auth';
import './NavBar.css';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { TbDental } from 'react-icons/tb';
import { CiStethoscope } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

type NavbarLink = {
  id: number;
  name: string;
  path: string;
};

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const signout = async () => {
    await getAuth().signOut();
    navigate('/');
  };

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
  }, []);

  const links: NavbarLink[] = useMemo<NavbarLink[]>(() => {
    const _links = [
      { id: 1, name: 'home', path: '/' },
      { id: 2, name: 'about', path: '/about' },
      { id: 3, name: 'Find Hospital', path: '/find' },
    ];

    if (!isLoggedIn) {
      _links.push({ id: 4, name: 'login', path: '/login' });
      _links.push({ id: 5, name: 'sign up', path: '/sign' });
    } else {
      _links.push({ id: 6, name: 'admin', path: '/admin' });
    }

    return _links;
  }, [isLoggedIn]);

  return (
    <nav>
      <div className="logo-container">
        <div className="icons">
          <BsFillHeartPulseFill color="rgb(26, 63, 232)" />
          <CiStethoscope color="rgb(26, 63, 232)" />
          <TbDental color="rgb(26, 63, 232)" />
        </div>
        <h3 className="logo-name">MenZuZu</h3>
      </div>
      <div className="links">
        {links.map((link) => (
          <Link key={link.id} to={link.path} />
        ))}
        {isLoggedIn && (
          <button className="signout-button" onClick={signout}>
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
