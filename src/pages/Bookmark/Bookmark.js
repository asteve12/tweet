import React from 'react';
import './Bookmark.css';

function Bookmark() {
  return (
    <div>
      <div id='bookmark-container'>
        <div id='bookmark-1'>
          <div>
            <h5>Bookmarks</h5>
            <p style={{ lineHeight: 0.5 }}> @AkinfolarinSte4</p>
          </div>
        </div>
        <div id='bookmark-2'>
          <h5>
            <b>You haven’t added any Tweets to your Bookmarks yet</b>
          </h5>
          <p>When you do, they’ll show up here</p>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
