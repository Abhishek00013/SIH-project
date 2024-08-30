
import './App.css';
import Navigation from "./button/navigation";
import logo from "./button/logo.png";
import Search from "./search";
function App() {
  return (
    <div className="App">
        <div className="container">
              <Navigation />
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={logo} alt="logo" style={{height: 'auto', width: '45%'}}/> 
             </div>
             <Search />
        </div>
    </div>
  );
}

export default App;
