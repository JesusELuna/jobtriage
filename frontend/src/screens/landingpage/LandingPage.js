import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '../../components/index';
import './LandingPage.css';
import Logo from '../../assets/logo.png';
import Calendar from '../../assets/calendar.svg';
import Free from '../../assets/free.svg';
import Priority from '../../assets/priority.svg';

const LandingPage = (props) => {
  const { email } = props;
  const isAuthenticated = email !== undefined;
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <Body isAuthenticated={isAuthenticated} />
    </div>
  );
};

const Header = (props) => {
  const history = useHistory();
  const { isAuthenticated } = props;

  const HeaderButtons = () => {
    if (isAuthenticated) {
      return (
        <div>
          <Button name="Access app" onClick={() => history.push('/dashboard')} />
        </div>
      );
    }
    return (
      <div>
        <Button name="Sign up" onClick={() => history.push('/signup')} />
        <Button name="Login" style={{ marginLeft: '5px' }} onClick={() => history.push('/login')} />
      </div>
    );
  };

  return (
    <div className="header">
      <span className="headerTitle">
        <div className="logoDiv">
          <NavLink to="/">
            <img src={Logo} alt="Job Triage" />
          </NavLink>
        </div>
      </span>
      <HeaderButtons />
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="bodyHeader">
        <div>
          <span className="bodyTitle"> Job Triage</span>
        </div>
        <div>
          <span style={{ fontSize: '1.4em' }}>Interactive way to manage and track your job applications</span>
        </div>
        <Button name="Github" style={{ marginTop: '15px' }} onClick={() => window.open('https://github.com/jobtriage/jobtriage', '_blank')} />
      </div>
      <div className="bodyContent">
        <div>
          <span className="h1">What is triage?</span>
          <p>Triage is the process of determining the priority of patient's treatments based on the severity of their condition. This rations patient treatment efficiently when resources are insufficient for all to be treated immediately, influencing the order and priority of emergency treatment, emergency transport, or transport destination for the patient.  </p>
        </div>
        <div style={{ marginTop: '7%' }}>
          <span className="h1">Job triage</span>
          <p>
            Job triage lets you manage job applications based on priority in kanban board style.
            Add notes, tasks which needs to be addressed before appearing for interview.
            <b> Self analysis </b>
            will help you to prepare your personal pitch and STAR stories.
          </p>
        </div>
        <div style={{ marginTop: '7%' }}>
          <span className="h1">Features</span>
          <div className="row">
            <div className="col">
              <img src={Priority} alt="priority" className="rowIcons" />
              <p>Priority based</p>
            </div>
            <div className="col">
              <img src={Calendar} alt="calendar" className="rowIcons" />
              <p>Google calendar Integration</p>
            </div>
            <div className="col">
              <img src={Free} alt="free" className="rowIcons" />
              <p>Completely free</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '7%', marginBottom: '15%' }}>
          <span className="h1">Contributing</span>
          <p>
            Job Triage is completely open source and free and it always will be.
            Contribute to Job Triage by creating &nbsp;
            <a href="https://github.com/jobtriage/jobtriage/issues" target="_blank" rel="noopener noreferrer">issues </a>
            and
            <a href="https://github.com/jobtriage/jobtriage/pulls" target="_blank" rel="noopener noreferrer"> Pull requests </a>
          </p>
        </div>
        <div style={{ marginBottom: '2%' }}>
          <span style={{ fontSize: '13px' }}>
            <div>
              Icons made by
              <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { users } = state;
  return users;
};

export default connect(mapStateToProps)(LandingPage);
