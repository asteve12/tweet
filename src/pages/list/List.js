import React from 'react';
//css
import './List.css';
//dependency
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function List() {
  return (
    <div id='list-container'>
      <div id='list-header'>
        <section id='list-header-sub-1'>
          <div>
            <ArrowBackIcon></ArrowBackIcon>
          </div>
          <div>
            <h5>
              <b>Lists</b>
            </h5>
            <p>@AkinfolarinSte4</p>
          </div>
        </section>
        {/*second part**/}
        <section id='list-hedaer-2'>
          <div>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
          <div>
            <NoteAddIcon></NoteAddIcon>
          </div>
        </section>
      </div>
      {/*next division*/}
      <div id='pinned-tweet-container'>
        <span>
          <b>Pinned Lists</b>
        </span>
      </div>
      {/*next division*/}
      <div id='list-1'>
        <p>
          Nothing to see here yet — pin your favorite Lists to access them
          quickly.
        </p>
      </div>
      {/*next division*/}
      <section>
        <div id='new_secton_1'>
          <b>Discover new Lists</b>
        </div>
        {/*next section*/}

        <div id='new_section_2'>
          <section id='new_section_2_sub'>
            <div id='img_section_2'></div>
            &nbsp; &nbsp;
            <div>
              <h5>
                <b>Developers Designers</b>
              </h5>
              <p>
                <span></span>
                Barzillai &nbsp;@PhilipAmiola
              </p>
            </div>
          </section>

          <section>
            <button id='new_section_follow_btn'>follow</button>
          </section>
        </div>
        {/*next section*/}
        <div id='new_section_3'>
          <section id='new_section_3_sub'>
            <div id='img_section_3'></div>
            &nbsp; &nbsp;
            <div>
              <h5>
                <b>Developers Designers</b>
              </h5>
              <p>
                <span></span>
                Barzillai &nbsp;@PhilipAmiola
              </p>
            </div>
          </section>

          <section>
            <button id='new_section_follow_btn'>follow</button>
          </section>
        </div>
        {/*next section*/}
        <div id='new_section_4'>
          <section id='new_section_4_sub'>
            <div id='img_section_4'></div>
            &nbsp; &nbsp;
            <div>
              <h5>
                <b>Developers Designers</b>
              </h5>
              <p>
                <span></span>
                Barzillai &nbsp;@PhilipAmiola
              </p>
            </div>
          </section>

          <section>
            <button id='new_section_follow_btn'>follow</button>
          </section>
        </div>
        {/*next section*/}
        <div id='show_more'>
          <a href='#'>showmore</a>
        </div>
      </section>

      <section id='your-list-container'>
        <div id='your-list'>
          <h3>
            <b>Your Lists</b>
          </h3>
        </div>

        <div id='set-of-list'>
          <p>
            You haven't created or followed any Lists. When you do, they'll show
            up here.
            <div>
              Tweets about the Topics you follow show up in your Home timeline
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}

export default List;
