import "./App.css";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Main from "./Main/main";
import Sidebar from "./Sidebar/sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
