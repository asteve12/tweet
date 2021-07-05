import React, { useRef, useState, useEffect, useReducer } from 'react';
import './Home.css';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TextareaAutosize from 'react-textarea-autosize';
import PublicIcon from '@material-ui/icons/Public';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MobileHome from '../mobileview/mobileViewHome';
import EvStationRoundedIcon from '@material-ui/icons/EvStationRounded';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Tweet from '../component/Tweet-modal/tweet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Explore from '../pages/explore/explore';
import Message from '../pages/message/message';
import Bookmark from '../pages/Bookmark/Bookmark';
import List from '../pages/list/List';
import Profile from '../pages/profile/Profile';
//import Link from 'react-router-dom';
//NavLink;
const initialState = {
  displayHome: true,
  displayExplore: false,
  displayNotification: false,
  displayMessage: false,
  displayBookmark: false,
  displayList: false,
  displayProfile: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'displayExplore':
      return { ...state, displayExplore: true, displayHome: false };
    case 'displayMessage':
      return { ...state, displayNotification: true, displayExplore: false };
  }
}

function Home(props) {
  const manipulateWorldIcon = useRef();
  const manipulateHoriLine = useRef();
  const handleTextAreaOnClick = () => {
    manipulateWorldIcon.current.style.display = 'block';
    manipulateHoriLine.current.style.display = 'block';
  };
  const homeIconColorChange = useRef();
  const [IconsClicked, setHomeIconClicked] = useState(null);
  const makeProfileConVisible = useRef();
  const invisibleMoreContainer = useRef();
  const homeContainer = useRef();
  const [tweetmodalVisibility, setTweetModalVisibility] = useState('none');
  const [pageState, dispatch] = useReducer(reducer, initialState);
  /*
  const [displayEachPage, setDisplayEachPae] = useState({
    home: '',
    explote: '',
    Notification: '',
    message: '',
    bookmark: '',
  });*/
  /*
  useEffect(() => {
    alert('effect');
    if (tweetmodalVisibility == 'none') {
      homeContainer.current.style.overflowY = 'sroll';
    } else if (tweetmodalVisibility == 'flex' || 'inline-flex') {
      homeContainer.current.style.overflowY = 'hidden';
    }
  });*/

  const handleChangeColorOnClick = function (e) {
    //e.target.style.color = 'red';

    if (IconsClicked) {
      IconsClicked.style.color = '';
    }
    e.currentTarget.style.color = 'rgba(29, 161, 242, 1)';

    const children_of_first_selection = homeIconColorChange.current.children;

    setHomeIconClicked(e.currentTarget);
    console.log(e.currentTarget.id);
  };

  const handleExplorePage = (e) => {
    alert('explore');
    dispatch({ type: 'displayExplore' });
  };

  const handleMessagePage = (e) => {
    dispatch({ type: 'displayMessage' });
  };

  const handleLoginConClick = (e) => {
    if (makeProfileConVisible.current.style.display == 'none') {
      makeProfileConVisible.current.style.display = 'flex';
      return;
    } else if (makeProfileConVisible.current.style.display == 'flex') {
      makeProfileConVisible.current.style.display = 'none';
      return;
    } else {
      makeProfileConVisible.current.style.display = 'flex';
    }
  };

  const handleLoginConBlur = (e) => {
    if (makeProfileConVisible.current.style.display == 'none') {
      makeProfileConVisible.current.style.display = 'flex';
    } else {
      makeProfileConVisible.current.style.display = 'none';
    }
  };

  const handleIconContainerVisibilty = (e) => {
    if (invisibleMoreContainer.current.style.display == 'none') {
      invisibleMoreContainer.current.style.display = 'flex';
      return;
    } else if (invisibleMoreContainer.current.style.display == 'flex') {
      invisibleMoreContainer.current.style.display = 'none';
      return;
    } else {
      invisibleMoreContainer.current.style.display = 'flex';
    }
  };

  const handleIconContainerBlur = (e) => {
    e.target.style.color = 'black';
    if (invisibleMoreContainer.current.style.display == 'none') {
      invisibleMoreContainer.current.style.display = 'flex';
    } else {
      invisibleMoreContainer.current.style.display = 'none';
    }
  };

  const handleTweetOverlayVisibility = (e) => {
    alert(tweetmodalVisibility);

    let displayMode = 'flex';

    homeContainer.current.style.overflowY = 'hidden';
    if (tweetmodalVisibility === 'flex') {
      setTweetModalVisibility('inline-flex');
    } else {
      setTweetModalVisibility(displayMode);
    }
  };

  return (
    <>
      <Tweet
        homeContainer={homeContainer}
        visible={tweetmodalVisibility}
      ></Tweet>

      <div id='home-container' ref={homeContainer}>
        <div id='home-first-section-wrapper'>
          <div id='home-first-section' ref={homeIconColorChange}>
            {/*svg imagess*/}
            <div id='svg-img-wrapper'>
              <div id='home-svg-container'>
                <svg
                  viewBox='0 0 24 24'
                  fill='rgba(29, 161, 242, 1)'
                  className='r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr'
                >
                  <g>
                    <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
                  </g>
                </svg>
                {/*end of svg imagess*/}
              </div>
            </div>
            {/*Home icon*/}
            {/*more icon invisible container*/}
            <div
              className='more-invisible-container'
              ref={invisibleMoreContainer}
            >
              <a href='#'>
                <span id='topic-icon'>
                  <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                </span>
                <span>Topics</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <EvStationRoundedIcon></EvStationRoundedIcon>
                </span>
                <span>Moments</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <AnnouncementRoundedIcon></AnnouncementRoundedIcon>
                </span>
                <span>Newsletter</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <LaunchRoundedIcon></LaunchRoundedIcon>
                </span>
                <span>Twitter ads</span>
              </a>
              <a href='#' id='invisible-more-icon-analytics-link'>
                <span id='topic-icon'>
                  <TimelineRoundedIcon></TimelineRoundedIcon>
                </span>
                <span>analytics</span>
              </a>
              <div id='invisible-more-icon-horizontal-rule'></div>
              <a href='#'>
                <span id='topic-icon'>
                  <SettingsRoundedIcon></SettingsRoundedIcon>
                </span>
                <span>settings and privacy</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <HelpOutlineRoundedIcon></HelpOutlineRoundedIcon>
                </span>
                <span>Help centers</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <ArtTrackIcon></ArtTrackIcon>
                </span>
                <span>Display</span>
              </a>
              <a href='#'>
                <span id='topic-icon'>
                  <KeyboardIcon></KeyboardIcon>
                </span>
                <span>Keyboard shortcuts</span>
              </a>
            </div>
            {/*end of more icon invisible container*/}
            <NavLink
              to='/home'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='home-icon-container'
                //ref={homeIconColorChange}
                //onClick={handleChangeColorOnClick}
              >
                <div id='home-supercript-section'>
                  <div id='home-supscript'></div>

                  <HomeIcon style={{ color: 'inherit' }}></HomeIcon>
                </div>

                <span id='home-text'>
                  <b>Home</b>
                </span>
              </div>
            </NavLink>
            {/*end of home icon*/}
            {/*explore icon*/}
            <NavLink
              to='/explore'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='explore-icon-container'
                onClick={handleChangeColorOnClick}
                ref={homeIconColorChange}
              >
                <ExploreIcon></ExploreIcon>
                <span id='explore-icon-text'>
                  <b>Explore</b>
                </span>
              </div>
            </NavLink>
            {/*end of icon*/}
            {/*notification icon*/}
            <NavLink
              to='/explore'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='notification-icon-container'
                onClick={(e) => {
                  //alert('helloe');
                  //handleChangeColorOnClick(e);
                  //handleExplorePage(e);
                }}
              >
                <NotificationsNoneIcon></NotificationsNoneIcon>
                <span id='notification-icon-text'>
                  <b>Explore</b>
                </span>
              </div>
            </NavLink>
            {/*notification icon*/}
            {/*message icon*/}
            <NavLink
              to='/message'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='message-icon-container'
                onClick={handleChangeColorOnClick}
              >
                <EmailIcon></EmailIcon>
                <span id='message-icon-text'>
                  <b>message</b>
                </span>
              </div>
            </NavLink>
            {/*end of message icon*/}
            {/*bookmarks icon*/}
            <NavLink
              to='/bookmark'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='bookmark-icon-container'
                onClick={handleChangeColorOnClick}
              >
                <BookmarkBorderIcon></BookmarkBorderIcon>
                <span id='bookmark-icon-text'>
                  <b>Bookmark</b>
                </span>
              </div>
            </NavLink>
            {/*end of bookmarks icon*/}
            {/*list icon*/}
            <NavLink
              to='/list'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              exact
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div id='list-icon-container' onClick={handleChangeColorOnClick}>
                <ListAltIcon></ListAltIcon>
                <span id='list-icon-text'>
                  <b>list</b>
                </span>
              </div>
            </NavLink>
            {/*end of list icon*/}
            {/*profile icon*/}

            <NavLink
              to='/profile'
              style={{
                textDecoration: 'none',
                color: 'black',
                listStyleType: 'none',
              }}
              onClick={handleChangeColorOnClick}
              activeStyle={{
                color: 'rgba(29, 161, 242, 1)',
              }}
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <div
                id='profile-icon-container'
                onClick={handleChangeColorOnClick}
                onBlur={handleIconContainerBlur}
                tabindex='0'
              >
                <PersonOutlineIcon></PersonOutlineIcon>
                <span id='profile-icon-text'>
                  <b>Profile</b>
                </span>
              </div>
            </NavLink>
            {/*end of profile icon*/}
            {/*more icon*/}

            <div
              id='more-icon-container'
              onClick={(e) => {
                handleChangeColorOnClick(e);
                handleIconContainerVisibilty(e);
              }}
              onBlur={handleIconContainerBlur}
              tabindex='0'
            >
              <MoreHorizIcon></MoreHorizIcon>
              <span id='more-icon-text'>
                <b>More</b>
              </span>
            </div>

            {/*end of more icon*/}
            {/*tweet btn*/}
            <div id='tweet-btn-container'>
              <button
                id='home-tweet-btn'
                onClick={handleTweetOverlayVisibility}
              >
                Tweet22
              </button>
              <button id='rounded-btn'></button>
            </div>
            {/*end of tweet btn*/}
            <br></br>
            <br></br>
            {/*login in user tab invisible part*/}
            <ProfileCard
              makeProfileConVisible={makeProfileConVisible}
            ></ProfileCard>
            {/*end of login user tab invisible part*/}
            {/*login in user tab*/}
            <div
              id='login-user-container'
              onClick={handleLoginConClick}
              onBlur={handleLoginConBlur}
              tabindex='0'
            >
              <div id='home-img-container'>
                <img
                  id='home-img'
                  src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                  alt='alt'
                />
              </div>
              <div id='login-user-container-text'>
                <span id='login-user-container-header-text'>
                  <b>impact_code</b>
                </span>
                <div id='user-tag-text'> @AkinfolarinSte4</div>
              </div>
              <MoreHorizIcon id='more-icon'></MoreHorizIcon>
            </div>
            {/*end of login user tab*/}
          </div>
        </div>
        {/*message section*/}

        {/*end of message section*/}

        {props.show.displayMessage ? (
          <Message></Message>
        ) : (
          <div id='home-second-section'>
            {/*home-second-section header*/}
            {props.show.displayList && <List></List>}
            {props.show.displayBookmark && <Bookmark></Bookmark>}
            {props.show.displayProfile && <Profile></Profile>}
            {props.show.displayHome && (
              <div id='home-second-section-header'>
                {/*home txt*/}
                <div>
                  <button id='home-second-section-header-text'>
                    <b>Home</b>
                  </button>
                </div>
                {/*end of home text*/}
                {/*star section*/}
                <div id='home-second-section-top-icon'>
                  <span>
                    <StarOutlineIcon></StarOutlineIcon>
                  </span>
                </div>
                {/*end of star section*/}
              </div>
            )}
            {/* second section body*/}
            {props.show.displayExplore && <Explore></Explore>}

            {props.show.displayHome && (
              <div id='second-section-body'>
                <div id='second-section-body-header-1'>
                  <div id='second-section-body-header-1-img'>
                    <img
                      src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                      alt=''
                    />
                  </div>

                  <div id='second-section-body-header-2'>
                    <div>
                      <TextareaAutosize
                        placeholder="What's Happening"
                        id='text-area'
                        maxRows={50}
                        onClick={handleTextAreaOnClick}
                      ></TextareaAutosize>
                    </div>
                    <br></br>
                    <div ref={manipulateWorldIcon} id='world-icon-container'>
                      <PublicIcon id='world-icon'></PublicIcon>
                      <span id='text-area-text'>Everyone can reply </span>
                    </div>
                    <div
                      ref={manipulateHoriLine}
                      id='horizontal-rule-world'
                    ></div>

                    <div id='second-section-body-down-icon'>
                      <div id='container-icons'>
                        <div id='media-icon-container'>
                          <PermMediaIcon></PermMediaIcon>
                        </div>
                        <div id='gif-icon-container'>
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

                {/*second section */}
                <div id='separator'></div>
                <div id='tweets-container'>
                  <div id='tweet-image-container'>
                    <div>
                      <RepeatIcon></RepeatIcon> 3
                    </div>
                    <img
                      id='tweet-image'
                      src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                      alt='tweet images'
                    />
                  </div>
                  <div id='tweet-content'>
                    <div>
                      <span>Harsha lIked</span>
                    </div>

                    <div id='tweet-name-section'>
                      <div>
                        <span>
                          <b>Cat Mcgee </b>
                        </span>
                        <span>@McGeecode. 9h</span>
                      </div>

                      <div>
                        <MoreHorizIcon></MoreHorizIcon>
                      </div>
                    </div>

                    <div>
                      <p>
                        To become an exceptional front-end web developer, you
                        must attain a skill for positioning and layouts without
                        depending on a framework. @KevinJPowell is the teacher
                        that you need to help you succeed!
                      </p>
                    </div>

                    <div id='tweet-media-container'>
                      <img
                        id='tweet-media-image'
                        src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                        alt=''
                      />
                    </div>

                    <div id='tweet-last-section'>
                      <div>
                        <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon> 42
                      </div>

                      <div>
                        <RepeatIcon></RepeatIcon> 3
                      </div>

                      <div>
                        <FavoriteBorderIcon></FavoriteBorderIcon> 3
                      </div>

                      <div>
                        <ArrowUpwardIcon></ArrowUpwardIcon>
                      </div>
                    </div>
                  </div>
                </div>

                {/*end of second section*/}
              </div>
            )}
            {/*end odf th e first second body content*/}
          </div>
        )}
        {!props.show.displayMessage && (
          <div id='home-third-section'>
            <div id='search-box-container'>
              <div id='search-box-end'>
                <SearchIcon></SearchIcon>
              </div>
              <input type='search' id='search-box' placeholder='search box' />
            </div>
            <div id='trend-box'>
              {/*first section*/}
              <div id='trend-box-header-container'>
                <h1 id='trend-box-header'>
                  <b>Trends for you</b>
                </h1>
                <div>
                  <SettingsIcon id='settings-icon'></SettingsIcon>
                </div>
              </div>
              {/*end of first section*/}
              {/*trending  person*/}
              <div id='trending-person'>
                <div id='trending-person-header'>
                  <div>Trending</div>
                  <div>
                    <MoreHorizIcon></MoreHorizIcon>
                  </div>
                </div>

                <div>
                  <p>
                    <b>#doggy</b>
                    <p>6543tweets</p>
                  </p>
                </div>
              </div>
              {/*end of trending person*/}
              {/*show more*/}
              <div id='trendbox-show-more'>show more</div>
              {/*end of show more*/}
            </div>
            {/*who to follow*/}
            <div id='who-to-follow-container'>
              {/*who to follow header*/}
              <div id='who-to-follow-header-container'>
                <h1 id='who-to-follow-header'>
                  <b>Who to follow</b>
                </h1>
              </div>
              {/*end of who to follow header*/}
              {/*who to follow  person*/}
              <div id='who-to-follow-person'>
                <div id='who-to-follow-img-container'>
                  <img
                    id='who-to-follow-img'
                    src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                  ></img>
                </div>
                <div id='who-to-follow-content-container'>
                  <div id='who-to-follow-details-section'>
                    <div id='who-to-follow-name' style={{ lineHeight: '0.7' }}>
                      akinfolrin stephen
                    </div>
                    <div>@name here</div>
                    <div>promoted</div>
                  </div>

                  <button id='follow-btn'>follow</button>
                </div>
              </div>
              {/*end of who to follow person*/}
              {/*show more*/}
              <div id='who-to-follow-show-more'>show more</div>
              {/*end of show more*/}
            </div>
            <br></br>
            {/*Topics to follow*/}
            <div id='who-to-follow-container'>
              {/*who to follow header*/}
              <div id='topics-header-container'>
                <h1 id='who-to-follow-header'>
                  <b>Topics to follow</b>
                </h1>
              </div>
              {/*end of who to follow header*/}
              {/*who to follow  person*/}
              <div id='topic-to-follow'>
                <div id='topics-to-follow-content-container'>
                  <div id='topic-to-follow-details-section'>
                    <div>
                      <b>open source</b>
                    </div>
                    <div>Technology</div>
                  </div>

                  <button id='follow-btn'>follow</button>
                  <button id='topic-to-follow-close-btn'>
                    <CloseIcon
                      style={{ color: `rgba(29, 161, 242, 1)` }}
                    ></CloseIcon>
                  </button>
                </div>
              </div>
              {/*end of who to follow person*/}
              {/*show more*/}
              <div id='who-to-follow-show-more'>show more</div>
              {/*end of show more*/}
            </div>
            {/* end of Topics to follow*/}
            <br></br>
            {/*footer*/}
            <div className='footer-third-sidebar'>
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
            {/*end of footer*/}
            <div className='footer-message-box'>
              <div>
                <h5>
                  <b>Message</b>
                </h5>
              </div>
              <div>
                <AddBoxIcon
                  style={{ color: `rgba(29, 161, 242, 1)` }}
                ></AddBoxIcon>
                <ExpandLessIcon
                  style={{ color: `rgba(29, 161, 242, 1)` }}
                ></ExpandLessIcon>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*mobile home view sectiom*/}
      <MobileHome></MobileHome>
    </>
  );
}

export default Home;

const ProfileCard = (props) => {
  return (
    <div id='profile-card-wrapper' ref={props.makeProfileConVisible}>
      <div id='ProfileCardContainer'>
        {/*login in user tab*/}
        <div id='invisible-profile-container'>
          <div id='home-img-container'>
            <img
              id='home-img'
              src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
              alt='alt'
            />
          </div>
          <div id='login-user-container-text'>
            <span id='login-user-container-header-text'>
              <b>impact_code</b>
            </span>
            <div id='user-tag-text'> @AkinfolarinSte4</div>
          </div>
          <MoreHorizIcon id='more-icon'></MoreHorizIcon>
        </div>
        {/*end of login user tab*/}
        <hr></hr>
        <div>add an existing account</div>
        <hr></hr>
        <div>logout at @ akinstephe4</div>
      </div>
      <div id='svg-down-icon-container'>
        <svg
          id='svg-down-icon'
          fill='white'
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='r-9uu7rm r-jwli3a r-4qtqp9 r-yyyyoo r-1227ba4 r-n6v787 r-1xvli5t r-dnmrzs r-u8s1d r-1plcrui r-uoibet r-lrvibr r-lrsllp'
        >
          <g>
            <path d='M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
