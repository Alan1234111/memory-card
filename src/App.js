import Header from "./modules/Header";
import Card from "./modules/Card";
import Footer from "./modules/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
