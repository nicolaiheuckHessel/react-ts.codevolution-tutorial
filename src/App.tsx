import './App.css';
import WelcomeList from './components/WelcomeList';
import ShowStatus from './components/ShowStatus';
import { Status } from './util/StatusEnum';
import TextCenter from './components/TextCenter';
import ShowIf from './util/ShowIf';
import HideIf from './util/HideIf';
import { BootstrapColor } from './util/BootstrapColor';
import BootstrapButton from './util/BootstrapButton';
import React from 'react';
import LoginOrOutButton from './components/LoginOrOutButton';
import TextAlign from './util/TextAlign';
import OnlyFor from './components/OnlyFor';
import ToastrTemplateLiterals from './components/ToastrTemplateLiterals';

function App() {
  let users = [
    {
      name: "Test user 1",
      isLoggedIn: true,
      messageCount: 20
    },
    {
      name: "Test user 2",
      isLoggedIn: false,
      messageCount: 0
    },
    {
      name: "Test user 3",
      isLoggedIn: true,
      messageCount: 3
    },
  ]
  const alertUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
    alert("User clicked me");
  }
  const userRole = "guest";
  return (
    <div className="App">
      <TextAlign align='right'>
        <LoginOrOutButton />
      </TextAlign>
      <TextCenter>
        <ShowIf condition={false}>
          <ShowStatus statusEnum={Status.Loading} />
          <ShowStatus statusEnum={Status.Success} />
          <ShowStatus statusEnum={Status.Error} />
        </ShowIf>
        <HideIf condition={true}>
          <WelcomeList users={users} />
        </HideIf>
        <ShowIf condition={true}>
          <BootstrapButton
            color={BootstrapColor.danger}
            onClick={(e) => alertUser(e)}
            style={{ border: "10px solid blue" }}
          >Click me!</BootstrapButton>
        </ShowIf>
        <OnlyFor role={userRole} admins><h1>This is for admins</h1></OnlyFor>
        <OnlyFor role={userRole} users><h1>This is for users</h1></OnlyFor>
        <OnlyFor role={userRole} guests><h1>This is for guests</h1></OnlyFor>
        <ToastrTemplateLiterals position='center'></ToastrTemplateLiterals>
      </TextCenter>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=97