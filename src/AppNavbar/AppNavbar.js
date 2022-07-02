import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppNavbar.module.css';
import './NavCss.css';
import logo from '../logo.svg';


const AppNavbar = () => (
  <div className={styles.AppNavbar} data-testid="AppNavbar">
    <div class="container-fluid">
      <div class="navbar-header d-flex justify-content-between align-items-center p-1">
        <div class="d-flex align-items-center">
          <a class="react-logo" href="#">
            <img src={logo} alt="React" className={styles.ReactLogo} />
          </a>
          <input class="search-input form-control text-white" type="text" placeholder="Search.." name="search" width="900px" />
        </div>
        <div class="d-flex text-white">
          <div class="nav-items rounded d-flex align-items-center mx-1">
            <i class='bx bxs-home fs-3 px-5 py-2'></i>
          </div>
          <div class="nav-items rounded d-flex align-items-center mx-1">
            <i class='bx bx-desktop fs-3 px-5 py-2' ></i>
          </div>
          <div class="nav-items rounded d-flex align-items-center mx-1">
            <i class='bx bx-store fs-3 px-5 py-2' ></i>
          </div> 
          <div class="nav-items rounded d-flex align-items-center mx-1">
            <i class='bx bxs-group fs-3 px-5 py-2' ></i>
          </div> 
        </div>
        <div class="d-flex">
          <a class="text-decoration-none" href="#">
            <button class="btn btn-gray rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
              <i class='bx bxs-grid text-white fs-4' ></i>
            </button>
          </a>  
          <a class="text-decoration-none" href="#">
            <button class="btn btn-gray rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
              <i class='bx bxl-messenger text-white fs-4' ></i>
            </button>
          </a>  
          <a class="text-decoration-none" href="#">
            <button class="btn btn-gray rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
              <i class='bx bxs-bell text-white fs-4' ></i>
            </button>
          </a>  
          <a class="text-decoration-none d-flex align-items-center" href="#">
              <img class="rounded-circle mx-1" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt="Profile" width="40px"/>
          </a>  
        </div>
      </div>
    </div>
  </div>
);

AppNavbar.propTypes = {};

AppNavbar.defaultProps = {};

export default AppNavbar;
