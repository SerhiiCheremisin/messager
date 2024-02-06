import './App.css';

//components
import Header from './components/Header';
import SideMenu from './components/Navigation/SideMenu';
import Messages from './components/Messages/Messages';
import UseGetUserIntel from './services/hooks/UseGetUserIntel';
import FirstScreenModal from './components/Modals/FirstScreenModal';

function App() {

  const { activeUser } = UseGetUserIntel();

  if (activeUser === "") {
    return(
      <FirstScreenModal/>
    )
  }

  return (
    <div className='user-page'>
      <div className="header">
      <Header/>
      </div>
      <div className="side-menu">
        <SideMenu/>
      </div>
      <div className="messageArea">
        <Messages/>
      </div>
  
    </div>
  );
}

export default App;
