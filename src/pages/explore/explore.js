import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

//css
import './explore.css';

//image
import new_img from './images/new_img.jpg';
import second_listing from './images/second_listing.png';
import first_listing from './images/first_listing.png';

//material ui  library
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Explore() {
  return (
    <div id='explore-container'>
      <div id='home-second-section-header'>
        {/*home txt*/}
        <div id='search-box-container'>
          <div id='search-box-end'>
            <SearchIcon></SearchIcon>
          </div>
          <input type='search' id='search-box' placeholder='search box' />
        </div>
        {/*end of home text*/}
        {/*star section*/}
        <div id='home-second-section-top-icon'>
          <span>
            <SettingsIcon></SettingsIcon>
          </span>
        </div>
        {/*end of star section*/}
      </div>
      <br></br>
      {/* change location section*/}
      <div id='change-location-container'>
        <h5>
          <b>You seem to be in a new location</b>
        </h5>
        <p>
          If you prefer to see what’s happening in a different location, you can
          customize what’s on your Explore tab in your settings
        </p>
        <button>change location</button>
        <div>
          <a href='#'>Keep this</a>
        </div>
      </div>
      {/*background image section*/}
      <div id='background-image-section'>
        <div id='background-image-wrapper'>
          <section id='explore-background-image-text'>
            <span>US politics</span>
            <span>yesterday</span>
            <h1 style={{ fontSize: '1.5em' }}>
              Forida bans its school from teaching critical 'race theory'
            </h1>
          </section>
        </div>
      </div>

      {/*listing section*/}
      <section className='listin-container'>
        <div id='sport-listing'>
          <div style={{ fontSize: '1em' }}>NBA</div>

          <div style={{ fontSize: '1em' }}>
            <span>FINAL</span>.<span>PHI</span>
            <span>won</span>
          </div>
        </div>
        <div id='first-sport-listing'>
          <div id='first-sport-image-container'>
            <div id='first-sport-img-2'>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'Cover' }}
                src={second_listing}
                alt=''
              />
            </div>
            <div>Toronto Blue jays</div>
          </div>

          <div>
            <span>3</span>
          </div>
        </div>

        <div id='second-sport-listing'>
          <div id='second-sport-image-container'>
            <div id='second-sport-img-1'>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'Cover' }}
                src={first_listing}
              ></img>
            </div>
            <div>Boston Red Sox</div>
          </div>

          <div>6</div>
        </div>
      </section>
      {/*listing container 2*/}
      <section className='list-container-2'>
        <div>
          <div>
            <span>sports</span>.<span>Tending</span>
          </div>
          {/***********/}
          <div>
            <h5>CP3 and Book</h5>
          </div>
          {/***********/}
          <div>
            <span>1014 tweets</span>
          </div>
        </div>
        {/***********/}
        <div>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
      </section>
      {/*listing container 2*/}
      <section className='list-container-2'>
        <div>
          <div>
            <span>sports</span>.<span>Tending</span>
          </div>
          {/***********/}
          <div>
            <h5>CP3 and Book</h5>
          </div>
          {/***********/}
          <div>
            <span>1014 tweets</span>
          </div>
        </div>
        {/***********/}
        <div>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
      </section>
    </div>
  );
}

export default Explore;
