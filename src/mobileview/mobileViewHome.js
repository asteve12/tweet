import React from 'react';
import './mobileViewHome.css';
import ExploreIcon from '@material-ui/icons/Explore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailIcon from '@material-ui/icons/Email';

function MobileHome() {
  return (
    <div id='mobileHomeWrapper'>
      <div className='mobileHomeContainer'>
        {/*mobile Home Header Beginning*/}
        <div className='mobileHomeHeader'>
          <div id='mobileHomeHeaderFirstSection'>
            <div id='profile-photo'>
              <img
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                id='mobile-profile-photo-img'
                alt=''
              />
            </div>
            <div id='current-page'>Home</div>
          </div>
          <div id='mobileHomeHeaderSecondSection'>
            <div>
              <ExploreIcon></ExploreIcon>
            </div>
          </div>
        </div>
        <div id='mobile-view-header-horizontal-line'></div>
        {/* end of mobile Home Header Beginning*/}
        {/*mobile tweet section*/}
        <div id='mobile-tweet-container'>
          <div id='mobile-tweet-container-img'>
            <img
              id='mobile-tweet-img'
              src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
              alt=''
            />
          </div>
          <div id='mobile-tweet-text'>
            <div id='mobile-tweet-name'>
              <div id='mobile-view-tweet-container-header'>
                akinfolarin stephen @akinfolarinstephens.5m
              </div>
              <div id='mobile-tweet-more'>
                <MoreHorizIcon></MoreHorizIcon>
              </div>
            </div>
            <div id='tweet-text-container'>
              Singer Demi Lovato has revealed they are nonbinary and are
              changing their pronouns, telling fans they are "proud" to make the
              change after "a lot of self-reflective work
            </div>
            <div id='mobile-tweet-img-container'>
              <img
                id='mobile-phone-tweet-img'
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                alt=''
              />
            </div>

            <div id='mobile-tweet-icons-section'>
              <div id='comment-icon-container'>
                <ChatBubbleOutlineIcon id='comment-icon'></ChatBubbleOutlineIcon>
                <span id='comment-count'>42</span>
              </div>

              <div id='retweet-icon-container'>
                <RepeatIcon id='retweet-icon'></RepeatIcon>
                <span id='retweet-counter'>3</span>
              </div>

              <div id='love-icon-container'>
                <FavoriteBorderIcon id='love-icon'></FavoriteBorderIcon>{' '}
                <span id='love-counter'>3</span>
              </div>

              <div id='arrow-icon-container'>
                <ArrowUpwardIcon id='arrow-icon'></ArrowUpwardIcon>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr id='mobile-view-horizontal-rule'></hr>
        </div>
        {/* end of mobile tweet section*/}
        {/*circle fixed btn*/}
        <div id='circle-fixed-btn'></div>
        {/* end of circle fixed btn*/}

        <div id='mobile-bottom-header'>
          <div>
            <HomeIcon></HomeIcon>
          </div>
          <div>
            <SearchIcon></SearchIcon>
          </div>

          <div>
            <NotificationsNoneIcon></NotificationsNoneIcon>
          </div>

          <div>
            <EmailIcon></EmailIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
