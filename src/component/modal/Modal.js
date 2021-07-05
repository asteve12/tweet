import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';
import Select from 'react-dropdown-select';
import CloseIcon from '@material-ui/icons/Close';

const yearGenerator = (start, end) => {
  var year_checker = start;
  var generated_year = [];
  while (year_checker > end - 1) {
    generated_year.push(year_checker);
    year_checker -= 1;
  }
  return generated_year;
};

function Modal(props) {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display && (
        <div className='login-modal-container'>
          <ModalForm
            visibility={props.handleVisibility}
            display={() => setDisplay(false)}
          ></ModalForm>
        </div>
      )}
    </>
  );
}

export default Modal;

const ModalForm = (props) => {
  const [placeholder, setPlaceholder] = useState(true);
  const [textLength, setTextLength] = useState(0);
  const inputFormHeader_1 = useRef(null);
  const inputFormHeader_2 = useRef();
  const [secondInputText, setSecondInputText] = useState(0);
  const [firstFormInputValue, setFirstFormInputValue] = useState(null);
  const [secondFormInputValue, setSecondFormInputValue] = useState(null);
  let [startYear, setStart] = useState(2021);
  let [endYear, setEndYear] = useState(1998);
  let [year, setYear] = useState(yearGenerator(startYear, endYear));
  const [emptyFieldMessage, setEmptyFieldMessage] = useState();
  const [EmptyFieldMessagePhone, setEmptyFieldMessagePhone] = useState();
  const [contentToDisplay, setContentToDisplay] = useState({
    firstDisplay: true,
    secondDisplay: false,
    thirdDisplay: false,
    fourthDisplay: false,
  });
  const [phoneEmailSelector, setphoneEmailSelector] = useState(
    placeholder ? 'Phone' : 'Email'
  );

  const [Dob, setDob] = useState({ Month: null, Day: null, year: null });
  const [registerInfo, setRegisterInfo] = useState({
    Name: firstFormInputValue,
    phoneEmailSelector: secondFormInputValue,
    Dob,
  });
  const [makeConfirmPhoneVisible, setMakePhoneConfirmPhoneVisible] =
    useState(false);
  const overlayNameFirstInput = useRef();
  const textOverLayPhone = useRef();

  const handleFocus = (e) => {
    e.target.className = 'focus';
    if (e.target.id == 'form-first-input' || 'form-first-input-error') {
      inputFormHeader_1.current.style.display = 'flex';
    }
  };
  const handleFocus_2 = (e) => {
    if (e.target.value.id == 'form-second-input' || 'form-second-input-error') {
      inputFormHeader_2.current.style.display = 'flex';
    }
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focus');
    if (e.target.id == 'form-first-input' || 'form-first-input-error') {
      inputFormHeader_1.current.style.display = 'none';
    }
    if (e.target.id == 'form-second-input' || 'form-second-input-error') {
      inputFormHeader_2.current.style.display = 'none';
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.id == 'form-first-input' || 'form-first-input-error ') {
      var length_of_text = e.target.value;
      setTextLength(length_of_text.length);
      setFirstFormInputValue(e.target.value);
      if (e.target.value === '') {
        setEmptyFieldMessage('what is your name');
        e.target.id = 'form-first-input-error';
        overlayNameFirstInput.current.id = 'first-input-text-Name-error';
      } else {
        setEmptyFieldMessage();
        e.target.id = 'form-first-input';
        overlayNameFirstInput.current.id = 'first-input-text-Name';
      }
    }
  };

  const handleSecondInputChange = (e) => {
    var length_of_text = e.target.value;
    setSecondInputText(length_of_text.length);
    setSecondFormInputValue(e.target.value);
    if (e.target.value === '') {
      e.target.id = 'form-second-input-error';
      textOverLayPhone.current.id = 'second-input-overlay-text-error';

      setEmptyFieldMessagePhone(() => {
        return placeholder ? 'what is your phone number' : 'what is your email';
      });
    } else {
      e.target.id = 'form-second-input';
      textOverLayPhone.current.id = 'second-input-overlay-text';
      setEmptyFieldMessagePhone();
    }
  };

  const handleEmailPhoneSwitcher = (e) => {
    setPlaceholder(!placeholder);
    setSecondInputText(0);
    setSecondFormInputValue('');
    setEmptyFieldMessagePhone();
  };

  const handleSelect = (e) => {
    if (e.target.id === 'first-select') {
      setDob({ ...Dob, Month: e.target.value });
      console.log('date of birth', Dob);
    } else if (e.target.id == 'second-select') {
      setDob({ ...Dob, Day: e.target.value });
    } else if (e.target.id == 'third-select') {
      setDob({ ...Dob, year: e.target.value });
    }
  };
  const handleNextBtnClick = (e) => {
    if ((e.target.className = 'first-next')) {
      if (
        firstFormInputValue &&
        secondFormInputValue &&
        Dob.Month &&
        Dob.year &&
        Dob.Day
      ) {
        if (contentToDisplay.firstDisplay === true) {
          setContentToDisplay({
            ...contentToDisplay,
            firstDisplay: false,
            secondDisplay: true,
          });
        }
      }
    }
    if ((e.target.className = 'second-next')) {
      if (contentToDisplay.secondDisplay === true) {
        setContentToDisplay({
          ...contentToDisplay,
          secondDisplay: false,
          thirdDisplay: true,
        });
      }
    }
  };

  const handlemakeConfirmPhoneVisible = () => {
    setMakePhoneConfirmPhoneVisible(!makeConfirmPhoneVisible);
  };

  const handleEditBtnClick = () => {
    setContentToDisplay({
      ...contentToDisplay,
      firstDisplay: true,
      secondDisplay: false,
      thirdDisplay: false,
    });
    setMakePhoneConfirmPhoneVisible(false);
  };

  const handleOkBtnClick = (e) => {
    setContentToDisplay({
      ...contentToDisplay,
      firstDisplay: false,
      secondDisplay: false,
      thirdDisplay: false,
      fourthDisplay: true,
    });
    setMakePhoneConfirmPhoneVisible(false);
  };

  const handleCloseBtn = (e) => {
    setContentToDisplay({
      firstDisplay: true,
      secondDisplay: false,
      thirdDisplay: false,
      fourthDisplay: false,
    });
  };

  const handleSecondClose = () => {
    setContentToDisplay({
      firstDisplay: false,
      secondDisplay: true,
      thirdDisplay: false,
      fourthDisplay: false,
    });
  };

  const handleFourthDisplay = () => {
    setContentToDisplay({
      firstDisplay: true,
      secondDisplay: false,
      thirdDisplay: false,
      fourthDisplay: false,
    });
  };

  const handleClickDisplayInput3 = (e) => {
    setContentToDisplay({
      firstDisplay: true,
      secondDisplay: false,
      thirdDisplay: false,
      fourthDisplay: false,
    });
  };

  return (
    <>
      <div className='form-wrapper'>
        <div className='form-container'>
          {contentToDisplay.firstDisplay && (
            <form>
              {/*form header*/}
              <div className='form-header-container'>
                <div id='form-header-svg-bird'>
                  <svg
                    viewBox='0 0 24 24'
                    id='svg'
                    fill='rgba(29, 161, 242, 1)'
                  >
                    <g>
                      <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
                    </g>
                  </svg>
                </div>
                <button
                  className='first-next'
                  id='form-header-next-btn'
                  onClick={handleNextBtnClick}
                >
                  Next
                </button>
              </div>
              {/*End of form header*/}
              {/*form body section*/}
              <div id='form-text-header-container'>
                <h1 id='form-body-heading-text'>
                  <b>Create your account</b>
                </h1>
              </div>
              <div>
                <div>
                  {/*text area*/}

                  <div
                    ref={inputFormHeader_1}
                    id='text-container-overlay-input-1'
                  >
                    <div ref={overlayNameFirstInput} id='first-input-text-Name'>
                      Name
                    </div>
                    <div>{textLength}/50</div>
                  </div>
                  {/* end of text area*/}
                  <input
                    type='text'
                    id='form-first-input'
                    placeholder='Name'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    maxlength='50'
                    onChange={handleOnChange}
                    data-placeholder='my placeholder'
                    value={firstFormInputValue}
                  ></input>
                  <span id='emptyFieldMessageName'>{emptyFieldMessage}</span>
                </div>
                <br></br>
                <div>
                  {/*textoverlay area */}
                  <div
                    id='text-container-overlay-input-2'
                    ref={inputFormHeader_2}
                  >
                    <div id='second-input-overlay-text' ref={textOverLayPhone}>
                      {placeholder ? 'Phone' : 'Email'}
                    </div>
                    <div>{secondInputText}/50</div>
                  </div>
                  {/*end of text overlay area*/}
                  <input
                    type=''
                    id='form-second-input'
                    onFocus={handleFocus_2}
                    onBlur={handleBlur}
                    onChange={handleSecondInputChange}
                    placeholder={placeholder ? 'Phone' : 'Email'}
                    value={secondFormInputValue}
                    maxlength='50'
                  ></input>
                  <span id='emptyFieldMessagePhone'>
                    {EmptyFieldMessagePhone}
                  </span>
                </div>
              </div>
              <br></br>
              <a href='#' onClick={handleEmailPhoneSwitcher}>
                use email instead
              </a>
              <br></br>

              <div>
                <br></br>
                <h5 id='date-of-birth-text'>Date of birth</h5>
                <p>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else
                </p>
                <div className='login-input-month-container'>
                  <div id='first-select-container'>
                    <div id='text-for-first-input'>Month</div>
                    <select
                      id='first-select'
                      value={Dob.Month}
                      onChange={handleSelect}
                      drt='top'
                    >
                      <option value></option>
                      <option value='january'>January</option>
                      <option value='February'>February</option>
                      <option value='March'>March</option>
                      <option value='April'>April</option>
                      <option value='May'>May</option>
                      <option value='June'>June</option>
                      <option value='July'>July</option>
                      <option value='August'>August</option>
                      <option value='September'>September</option>
                      <option value='October'>October</option>
                      <option value='November'>November</option>
                      <option value='December'>December</option>
                    </select>
                  </div>
                  <div id='second-select-container'>
                    <div id='text-for-second-input'>Day</div>
                    <select
                      id='second-select'
                      onChange={handleSelect}
                      drt='top'
                      value={Dob.Day}
                    >
                      <option value></option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>

                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>
                  </div>
                  <div id='third-select-container'>
                    <div id='text-for-third-input'>hellow</div>
                    <select
                      id='third-select'
                      value={Dob.year}
                      onChange={handleSelect}
                      drt='top'
                    >
                      <option value></option>
                      {year.map((eachYear) => {
                        return <option value={eachYear}>{eachYear}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              {/*end form body section*/}
            </form>
          )}
          {/*beginning of second display*/}
          {contentToDisplay.secondDisplay && (
            <div className='second-display-container'>
              <form action=''>
                {/*form header*/}
                <div className='form-header-container'>
                  <button id='close-btn' onClick={handleCloseBtn}>
                    <CloseIcon
                      style={{ color: `rgba(29, 161, 242, 1)` }}
                    ></CloseIcon>
                  </button>
                  <div id='form-header-svg-bird'>
                    <svg
                      viewBox='0 0 24 24'
                      id='svg'
                      fill='rgba(29, 161, 242, 1)'
                    >
                      <g>
                        <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
                      </g>
                    </svg>
                  </div>
                  <button
                    className='second-next'
                    id='form-header-next-btn'
                    onClick={handleNextBtnClick}
                  >
                    Next
                  </button>
                </div>
                {/*End of form header*/}
                {/*first text*/}
                <br></br>
                <h1 id='second-display-text'>
                  <b>Customize your experience</b>
                </h1>
                {/*end of first text*/}
                {/*second text*/}
                <br></br>
                <div>
                  <h1 id='track-text'>
                    <b>Track where you see Twitter content across the web</b>
                  </h1>
                  <p>
                    Twitter uses this data to personalize your experience. This
                    web browsing history will never be stored with your name,
                    email, or phone number.
                    <input type='checkbox'></input>
                  </p>
                </div>
                {/* end of second text*/}
              </form>
              <div>
                For more details about these settings, visit the
                <a href='#'>Help Center.</a>
              </div>
            </div>
          )}
          {/*end of second display*/}

          {/*final section*/}
          {contentToDisplay.thirdDisplay && (
            <div>
              <div id='form-text-header-container'>
                <button id='close-btn' onClick={handleSecondClose}>
                  <CloseIcon
                    style={{ color: `rgba(29, 161, 242, 1)` }}
                  ></CloseIcon>
                </button>
                <div id='thirdDisplayText'>
                  <b>3 of 5 </b>
                </div>
              </div>
              <h1 id='form-body-heading-text'>
                <b>Create your account</b>
              </h1>
              <div>
                {/*name*/}
                <div>
                  {/*text area*/}

                  <div id='head-text-display-3'>
                    <div>Name</div>
                  </div>
                  {/* end of text area*/}
                  <input
                    onClick={handleClickDisplayInput3}
                    type='text'
                    id='form-input-display-3'
                    placeholder='Name'
                    maxlength='50'
                    value={firstFormInputValue}
                  ></input>
                  <span id='emptyFieldMessageName'>{emptyFieldMessage}</span>
                </div>
                <br />
                {/* end name*/}
                {/*phone number*/}
                <div>
                  {/*text area*/}

                  <div id='head-text-display-3-sec'>
                    <div>Phone</div>
                  </div>
                  {/* end of text area*/}
                  <input
                    onClick={handleClickDisplayInput3}
                    type='text'
                    id='form-input-display-3-sec'
                    placeholder='Name'
                    maxlength='50'
                    value={secondFormInputValue}
                  ></input>
                  <span id='emptyFieldMessageName'>{emptyFieldMessage}</span>
                </div>
                <br />

                {/* end of phone number*/}
                {/*D.O.B*/}
                <div>
                  {/*textoverlay area */}
                  <div id='head-text-display-3-sec'>
                    <div>Birth date</div>
                  </div>
                  {/*end of text overlay area*/}
                  <input
                    onClick={handleClickDisplayInput3}
                    id='form-input-display-3-third'
                    placeholder={placeholder ? 'Phone' : 'Email'}
                    value={`${Dob.Month},${Dob.Day},${Dob.year}`}
                    maxlength='50'
                  ></input>
                  <span id='emptyFieldMessagePhone'>
                    {EmptyFieldMessagePhone}
                  </span>
                </div>
                {/*D.O.B*/}
                <br />

                <div>
                  <span>
                    By signing up, you agree to the
                    <a href='#'>Terms of Service</a> and{' '}
                    <a href='#'>Privacy Policy</a>
                    including<a href='#'>Cookie use</a>.Others will be able to
                    find you by email or phone number when provided.
                    <a href='#'>Privacy Options</a>
                  </span>
                </div>

                <div>
                  <div>
                    <div
                      id='login-signup-btn'
                      onClick={handlemakeConfirmPhoneVisible}
                    >
                      signup
                    </div>
                  </div>
                </div>
              </div>

              {/*end of signup section*/}
            </div>
          )}
          {contentToDisplay.fourthDisplay && (
            <div className='confirm-text-sent-container'>
              <form action=''>
                {/*form header*/}
                <div className='form-header-container'>
                  <button id='close-btn' onClick={handleFourthDisplay}>
                    <CloseIcon
                      style={{ color: `rgba(29, 161, 242, 1)` }}
                    ></CloseIcon>
                  </button>
                  <div id='form-header-svg-bird'>
                    <svg
                      viewBox='0 0 24 24'
                      id='svg'
                      fill='rgba(29, 161, 242, 1)'
                    >
                      <g>
                        <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
                      </g>
                    </svg>
                  </div>
                  <button
                    className='fourth-next'
                    id='form-header-next-btn'
                    onClick={props.display}
                  >
                    Next
                  </button>
                </div>
                {/*End of form header*/}
                <h1 id='text-phone-confirmation'>
                  <b>We sent you a code</b>
                </h1>
                <div>
                  {/*textarea*/}
                  <div id='text-container-overlay-input-1'>
                    <div>Verification code</div>
                    <div>{textLength}/50</div>
                  </div>
                  {/*end textarea*/}
                  <p>Enter it below to verify {secondFormInputValue}</p>
                  <input
                    type='text'
                    id='form-first-input'
                    placeholder='verification code'
                    //onFocus={handleFocus}
                    //onBlur={handleBlur}
                    maxlength='50'
                    data-placeholder='my placeholder'
                  ></input>
                  <a href='#'>Didn't receive text</a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {makeConfirmPhoneVisible && (
        <ConfirmTextModal
          number={secondFormInputValue}
          handleEdit={handleEditBtnClick}
          handleOk={handleOkBtnClick}
        ></ConfirmTextModal>
      )}
    </>
  );
};

const ConfirmTextModal = (props) => {
  return (
    <div className='confirm-phone-container'>
      <div id='confirm-phone-content'>
        <h1 id='confirm-phone-Heading'>
          <b>Verify Phone</b>
        </h1>
        <p>
          We'll text your verification code to{props.number}. Standard SMS fees
          may apply.
        </p>
        <div className='edit-ok-btn-container'>
          <button id='edit-btn' onClick={props.handleEdit}>
            <b>Edit</b>
          </button>
          <button id='ok-btn' onClick={props.handleOk}>
            <b>ok</b>
          </button>
        </div>
      </div>
    </div>
  );
};
