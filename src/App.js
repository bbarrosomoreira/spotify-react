import "./App.css";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Main from "./Main/main";
import Sidebar from "./Sidebar/sidebar";

function App() {
  return (
    <>
      <Header />; // Return the Header component
      <Footer />; // Return the Footer component
      <Sidebar />; // Return the Sidebar component
      <Main />; // Return the Main component
    </>
  );
}

export default App;
