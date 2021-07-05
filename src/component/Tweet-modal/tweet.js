import React, { useEffect, useRef } from 'react';
import './tweet.css';
import CloseIcon from '@material-ui/icons/Close';
import TextareaAutosize from 'react-textarea-autosize';
import PublicIcon from '@material-ui/icons/Public';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RepeatIcon from '@material-ui/icons/Repeat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Tweet(props) {
  const manipulateWorldIcon = useRef();
  const manipulateHoriLine = useRef();
  const makeInvisible = useRef();

  const handleModalDisappearance = (e) => {
    e.stopPropagation();
    e.currentTarget.style.display = 'none';
    props.homeContainer.current.style.overflowY = 'scroll';
  };

  const handleCloseBtn = (e) => {
    e.stopPropagation();
    makeInvisible.current.style.display = 'none';
    props.homeContainer.current.style.overflowY = 'scroll';

    console.log('close', props.homeContainer.current.style.overflowY);
  };

  return (
    <div
      id='tweet-invisible-container'
      onClick={handleModalDisappearance}
      style={{ display: props.visible }}
      ref={makeInvisible}
    >
      <div id='modal-content' onClick={(e) => e.stopPropagation()}>
        <div id='modal-content-wrapper'>
          <div id='modal-header'>
            <button
              id='topic-to-follow-close-btn-modal'
              onClick={handleCloseBtn}
            >
              <CloseIcon style={{}}></CloseIcon>
            </button>
          </div>
          {/*horizontal rule*/}
          <div id='horizontal-rule'></div>
          {/* end of horizontal rule*/}
          <div id='second-section-body-header-1-modal'>
            <div id='second-section-body-header-1-img'>
              <img
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                alt=''
              />
            </div>

            <div id='second-section-body-header-2-modal'>
              <div id='modal-inputbox-wrapper'>
                <TextareaAutosize
                  placeholder="What's Happening"
                  id='text-area'
                  maxRows={50}
                ></TextareaAutosize>
              </div>
              <br></br>
              <div id='world-icon-container-modal'>
                <PublicIcon id='world-icon'></PublicIcon>
                <span id='text-area-text'>Everyone can reply </span>
              </div>
              <br></br>
              {/*horizontal rule*/}
              <div id='horizontal-rule'></div>
              <br></br>
              {/* end of horizontal rule*/}

              <div id='second-section-body-down-icon-modal'>
                <div id='container-icons'>
                  <div id='media-icon-container'>
                    <PermMediaIcon></PermMediaIcon>
                  </div>

                  <div id='gif-icon-container-modal'>
                    <GifIcon></GifIcon>
                  </div>
                  <div id='emoji-icon-container'>
                    <PollIcon></PollIcon>
                  </div>
                  <div id='emoji-icon-container'>
                    <SentimentSatisfiedIcon></SentimentSatisfiedIcon>
                  </div>
                  <div id='schedule-icon-container'>
                    <ScheduleIcon></ScheduleIcon>
                  </div>
                  <div id='tweet-btn-container'>
                    <button id='tweet-btn'>Tweet</button>
                  </div>

                  <div id='tweet-btn-container-2'>
                    <button id='tweet-btn'>tweet2</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
