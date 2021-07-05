import React from 'react';
//css
import '../message/message.css';
//dependency

//material-ui
import SettingsIcon from '@material-ui/icons/Settings';
import EmailIcon from '@material-ui/icons/Email';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

function Message() {
  return (
    <div className='message-page-container'>
      <section id='first-section'>
        <div id='first-section-1'>
          <div>
            <span>
              <b>Message</b>
            </span>
          </div>
          <div id='first-section-2'>
            <span>
              <SettingsIcon></SettingsIcon>
            </span>
            <span>
              <EmailIcon></EmailIcon>
            </span>
          </div>
        </div>
        {/*next divisions*/}
        <div id='first-section-3'>
          <span>Message</span>
          <span>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </span>
        </div>
        {/*next divisions*/}
        <div id='first-section-4'>
          <div id='first-sub-section-4'>
            <div id='first-sub-section-4-1'>
              <SearchIcon></SearchIcon>
            </div>
            <input
              id='first-sub-section-4-2'
              type='search'
              placeholder='search people and groups'
            />
          </div>
        </div>
        {/*next divisions*/}
        <div id='first-section-5'>
          <div id='first-section-sub-5-1'>
            <section id='first-section-sub-5-4'>
              <div id='first-section-sub-5-2'></div>
              &nbsp; &nbsp;
              <span id='first-section-sub-5-3'>
                <h5>Himanshu&nbsp;@himanshu1332</h5>
                <h6>you sent a message</h6>
              </span>
            </section>
            <span id='first-section-sub-5-3'>may 30</span>
          </div>
        </div>
        {/*next divisions*/}
        <div id='first-section-5'>
          <div id='first-section-sub-5-1'>
            <section id='first-section-sub-5-4'>
              <div id='first-section-sub-5-2'></div>
              &nbsp; &nbsp;
              <span id='first-section-sub-5-3'>
                <h5>Himanshu&nbsp;@himanshu1332</h5>
                <h6>you sent a message</h6>
              </span>
            </section>
            <span id='first-section-sub-5-3'>may 30</span>
          </div>
        </div>
      </section>

      <section id='second-section'>
        <div id='second-section-1'>
          <h5>
            <b>you don't have a message seleced yet</b>
          </h5>
          <p>Choose one from your existing messages, or start a new one.</p>
          <button id='second-section-new'>New message</button>
        </div>
      </section>
    </div>
  );
}

export default Message;
