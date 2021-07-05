import React, { useState, useEffect } from 'react';
import Modal from '../component/modal/Modal';
import './login.css';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';
import { Wave } from 'react-animated-text';

function Login() {
  const [modalShow, setModalShow] = React.useState(false);
  const [visibility, setVisibility] = useState(false);
  const handleVisbilty = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <div id='screen-not-available'>
        {/*image <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          mobile,and tablet version not available coming soon
  </TextLoop>*/}

        <div>
          <Wave
            text='Mobile Version Not Available'
            effect='stretch'
            effectChange='2'
          />
        </div>

        <div id='home-link-wrapper'>
          <Link to='/home' id='home-link'>
            <div> visit home</div>
          </Link>
        </div>
      </div>

      {/*login body*/}
      <div className='login-body'>
        <div id='login-image-container'>
          <img
            id='login-image'
            src='https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png'
            alt='login '
          />
          {/*svg section*/}
          <div id='login-svg-container'>
            <svg
              viewBox='0 0 24 24'
              fill='white'
              className='r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr'
            >
              <g>
                <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
              </g>
            </svg>
          </div>

          {/* End of svg section*/}
        </div>
        <div id='login-authentication'>
          {/*image bird section*/}
          <div id='login-authentication-bird-icon'>
            <svg viewBox='0 0 24 24' id='svg' fill='rgba(29, 161, 242, 1)'>
              <g>
                <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
              </g>
            </svg>
          </div>
          <br></br>

          {/*text section*/}
          <div id='login-authentication-text'>
            <h1 style={{ fontSize: '4em', lineHeight: '' }}>Happening Now</h1>
          </div>
          {/*login btn*/}
          <div>
            <h1>Join twitter</h1>
            <div id='login-signup-btn' onClick={handleVisbilty}>
              signup
            </div>
            <br></br>
            <Link to='/login'>
              <div id='login-login-btn'>login</div>
            </Link>
          </div>
        </div>
      </div>
      {/* end of login body*/}
      {/*login footer*/}
      <div className='login-footer'>
        <a href='#'>About</a>
        <a href='#'>Help center</a>
        <a href='#'>Terms of service</a>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Cookie policy</a>
        <a href='#'>Ads info</a>
        <a href='#'>Blog</a>
        <a href='#'>Status</a>
        <a href='#'>Career</a>
        <a href='#'>Brand resources</a>
        <a href='#'>Advertising marketing</a>
        <a href='#'>Twitter for business</a>
        <a href='#'>Dvelopers</a>
        <a href='#'>Directory</a>
        <a href='#'>Settings</a>
      </div>
      {/*End of login footer*/}
      <div>
        <p
          style={{
            textAlign: 'center',
            lineHeight: '0.1',
            fontSize: '13px',
            color: 'gray',
          }}
        >
          © 2021 Twitter, Inc.
        </p>
      </div>
      {/*testing modal */}
      {visibility && (
        <Modal visibilty={visibility} handleVisibility={handleVisbilty}></Modal>
      )}
      {/*end of modal testing*/}
    </div>
  );
}

export default Login;
