import React, { useState, useRef } from 'react';
import './profile.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RepeatIcon from '@material-ui/icons/Repeat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import '../../Home/Home.css';

function Profile() {
  const topicsToFollow = [
    'open source',
    'linux',
    'computer programming',
    'viral tweet',
    'hihjt',
    'computing',
    'ade',
    'stephen',
    'alex',
    'baller',
    'ronke',
    'shizi',
  ];
  return (
    <div id='profile-container'>
      {/*header*/}
      <div id='profile-header'>
        <span>
          <ArrowBackIcon></ArrowBackIcon>
        </span>
        &nbsp; &nbsp; &nbsp;
        <span>
          <h5>
            <b>impact_code</b>
          </h5>
          <p>56 tweets</p>
        </span>
      </div>
      {/*background image*/}
      <section id='profile-bck-img-section'>
        <div id='profile-bck-container'>
          <div id='profile-bck-img'>
            <div id='bg-img-container'>
              <img
                id='profile-bg-image'
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
              ></img>
            </div>
            <div id='profile-picture'>
              <div id='profile-photo-page'>
                <img
                  src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                  id='profile-photo-image'
                ></img>
                {/*button container*/}
                <div id='profile-detail-container'>
                  <h5>
                    <b>impact_code</b>
                  </h5>
                  <p>@AkinfolarinSte4</p>
                </div>
              </div>

              <div id='profile-edit-btn'>
                <button>Edit profile</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*next section*/}
      <section id='about'>
        <h6>
          Front end Developer,React,JavaScript,Next.js.Actively looking for a
          remote position
        </h6>

        <div>
          <span>
            <LocationOnIcon></LocationOnIcon>
            Lagos,Nigeria &nbsp;&nbsp;
            <span>
              <InsertLinkIcon></InsertLinkIcon>
              <a href='#'>agitated-goldstine-9a3d5f.netlify.app</a>
            </span>
          </span>
          <br></br>
          <span>
            <DateRangeIcon></DateRangeIcon>
            &nbsp;&nbsp; joined Novenber 2020
          </span>
          <br />
          <br />
          <span>134 following</span>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <span>9 Followers</span>
        </div>
      </section>

      {/*tweets section btns*/}
      <section id='tweets-btn'>
        <div>Tweets</div>
        <div>Tweets & replies</div>
        <div>Media</div>
        <div>Likes</div>
      </section>

      <section>
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
                To become an exceptional front-end web developer, you must
                attain a skill for positioning and layouts without depending on
                a framework. @KevinJPowell is the teacher that you need to help
                you succeed!
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
      </section>
      <br></br>

      <section id='profile-who-to-follow'>
        <div id='profile-who-to-follow-header'>
          <h5>
            <b>Who to follow</b>
          </h5>
        </div>
        <div id='follow-suggestion-1'>
          <div id='follow-suggestion-sub-1'>
            <div id='follow-img-wrapper'>
              <img
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                style={{ width: '100%', height: '100%', borderRadius: '100%' }}
                alt=''
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div id='follow-details'>
              <h5>
                <b>Kirpal Demian</b>
                <p>@kirpaldemian</p>
                <p>Flutter developer @VGVentures . Runner 🏔</p>
              </h5>
            </div>
          </div>
          <div id='follow-suggestion-sub-2'>
            <button id='suggest-follow-btn'>follow</button>
          </div>
        </div>

        {/*next divisions*/}
        <div id='follow-suggestion-2'>
          <div id='follow-suggestion-sub-2'>
            <div id='follow-img-wrapper-2'>
              <img
                src='https://react-projects-5-menu.netlify.app/./images/item-9.jpeg'
                style={{ width: '100%', height: '100%', borderRadius: '100%' }}
                alt=''
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div id='follow-details-2'>
              <h5>
                <b>Kirpal Demian</b>
                <p>@kirpaldemian</p>
                <p>Flutter developer @VGVentures . Runner 🏔</p>
              </h5>
            </div>
          </div>
          <div id='follow-suggestion-sub-3'>
            <button id='suggest-follow-btn-2'>follow</button>
          </div>
        </div>
        {/*next divisions*/}
        <div id='profile-section-showmore'>Show more</div>
      </section>

      {/*next sections*/}
      <section id='topics-to-follow '>
        <div id='Tweets-short'>
          <div>
            <h5>
              <b>Topics to follow</b>
              <p style={{ fontSize: '0.8em' }}>
                Tweets about the Topics you follow show up in your Home timeline
              </p>
            </h5>
          </div>
        </div>
        <br></br>
        <Topics topics={topicsToFollow}></Topics>
      </section>
    </div>
  );
}

export default Profile;

const Topics = (props) => {
  const topic = props.topics;
  const closeBtn = useRef();
  const profileBtn = useRef();
  const topicToFollowContainer = useRef();

  const category = topic.reduce((x, y, z) => {
    return { ...x, [topic[z]]: { displayClose: true, displayadd: true } };
  }, {});
  const [propertySetting, setProperty] = useState(category);
  const [displayDown, setdisplayDown] = useState(true);

  const handleClose = (e) => {
    const target_id = e.currentTarget.id;
    //let a = propertySetting.target_id.displayClose;
    //console.log('closeBtn', closeBtn.current.id);
    //console.log('targeter', target_id);
    let holder = [...topicToFollowContainer.current.children];

    //console.log(
    //   holder.filter((eachChild) => eachChild.className === target_id)
    //);
    let gotten = holder.filter(
      (eachChild) => eachChild.className === target_id
    );

    let selected = gotten[0];
    //console.log(selected.children);
    let a = [...selected.children];
    let holder_for_topic_box = a.filter(
      (eachChild) => eachChild.id == 'topic-box'
    );
    //console.log('holder', holder_for_topic_box);
    let first_box = holder_for_topic_box[0];
    //let second_box = holder_for_topic_box[2];
    first_box.id = 'topic-box-2';
    //second_box.id = 'topics-cancel-box-2';

    let holder_for_topic_box_2 = a.filter(
      (eachChild) => eachChild.id == 'topics-cancel-box'
    );
    console.log('styler', holder_for_topic_box_2);
    let second_box = holder_for_topic_box_2[0];
    second_box.id = 'topics-cancel-box-2';

    //closeBtn.current.style.display = 'none';
    //profileBtn.current.style.borderRight =
    //'solid 2px rgba(206, 199, 199, 0.596)'
    //);
    // profileBtn.current.style.borderTopRightRadius = '30px';
    //profileBtn.current.style.borderBottomRightRadius = '30px';
    //profileBtn.current.style.display = 'flex';
    //profileBtn.current.style.width = '100%';
    //profileBtn.current.id = 'topic-box-2';

    console.log(profileBtn.current.id);

    setProperty(() => {
      return {
        ...propertySetting,
        [`${target_id}`]: {
          ...propertySetting[`${target_id}`],
          displayClose: false,
        },
      };
    });
    //alert('handle close');

    console.log(propertySetting, 'sett');
  };

  const handleAdd = (e) => {};
  return (
    <>
      <div id='topics-container' ref={topicToFollowContainer}>
        {props.topics.map((eachTopics) => {
          return (
            <div id='topics-to-follow-container' className={eachTopics}>
              <div id='topic-box' className={eachTopics} ref={profileBtn}>
                {eachTopics}

                {propertySetting[eachTopics].displayadd === true &&
                propertySetting[eachTopics].displayClose === true ? (
                  <span onClick={handleAdd}>
                    <AddIcon></AddIcon>
                  </span>
                ) : (
                  <div></div>
                )}
              </div>

              <div id='topics-cancel-box' className={eachTopics} ref={closeBtn}>
                {propertySetting[eachTopics].displayClose === true ? (
                  <span id={eachTopics} onClick={handleClose}>
                    <CloseIcon></CloseIcon>
                  </span>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
        {
          <div id='tweet-alert-container'>
            <div id='topic-removal-alert'>
              we won't suggest these topic anymore. <span>undo</span>{' '}
            </div>
          </div>
        }
      </div>
    </>
  );
};
