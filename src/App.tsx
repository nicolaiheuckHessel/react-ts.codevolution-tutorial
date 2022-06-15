import './App.css';
import WelcomeList from './components/WelcomeList';
import ShowStatus from './components/ShowStatus';
import { Status } from './util/StatusEnum';
import TextCenter from './components/TextCenter';
import ShowIf from './util/ShowIf';
import HideIf from './util/HideIf';

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
  return (
    <div className="App">
      <TextCenter>
        <ShowIf condition={true}>
          <ShowStatus statusEnum={Status.Loading} />
          <ShowStatus statusEnum={Status.Success} />
          <ShowStatus statusEnum={Status.Error} />
        </ShowIf>
        <HideIf condition={false}>
          <WelcomeList users={users} />
        </HideIf>
      </TextCenter>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=97