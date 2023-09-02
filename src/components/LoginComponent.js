import React, { useState } from 'react';
import './LoginComponent.css';

const LoginComponent = () => {
    const [values, setValues] = useState({
      applicationId: ((Math.random)*4),
      email: '',
      name: '',
      age: '',
      contact: '',
      highestEducation: '',
      skills: '',
      experience: '',
      currentCTC: '',
      expectedCTC: '',
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your server or perform other actions here.
    console.log('Form submitted with data:', values);
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Job Application Form</h1>
        <div className="login__content">
          {/* Email */}
          <div className="login__box">
            <i className="ri-user-3-line login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                name="email"
                required
                className="login__input"
                placeholder=""
                value={values.email}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Email <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Full name */}
          <div className="login__box">
            <i className="ri-profile-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="name"
                required
                className="login__input"
                placeholder=" "
                value={values.name}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Full Name <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Age */}
          <div className="login__box">
            <i className="ri-calendar-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="age"
                required
                className="login__input"
                placeholder=" "
                value={values.age}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Age <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Contact */}
          <div className="login__box">
            <i className="ri-phone-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="age"
                required
                className="login__input"
                placeholder=" "
                value={values.contact}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Contact <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Education */}
          <div className="login__box">
            <i className="ri-book-2-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="highestEducation"
                required
                className="login__input"
                placeholder=" "
                value={values.highestEducation}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Highest Education <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Skills */}
          <div className="login__box">
            <i className="ri-code-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="skills"
                required
                className="login__input"
                placeholder=" "
                value={values.skills}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Skills <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Experience */}
          <div className="login__box">
            <i className="ri-community-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="experience"
                required
                className="login__input"
                placeholder=" "
                value={values.experience}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Experience <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Current CTC */}
          <div className="login__box">
            <i className="ri-wallet-3-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="currentCTC"
                required
                className="login__input"
                placeholder=" "
                value={values.currentCTC}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Current CTC <span className="required__sign">*</span>
              </label>
            </div>
          </div>

          {/* Expected CTC */}
          <div className="login__box">
            <i className="ri-exchange-dollar-line"></i>
            <div className="login__box-input">
              <input
                type="text"
                name="expectedCTC"
                required
                className="login__input"
                placeholder=" "
                value={values.expectedCTC}
                onChange={handleInputChange}
              />
              <label htmlFor="" className="login__label">
                Expected CTC <span className="required__sign">*</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="login__button" onClick={handleSubmit}>
          Submit
        </button>

      </form>
    </div>
  );
};

export default LoginComponent;
