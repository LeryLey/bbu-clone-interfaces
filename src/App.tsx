import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import Heros from "./page/Home/Heros";
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="h-auto">
      <HeaderTop />
      <Navbar />
      {/* hero  */}
      <Heros />
      <Footer />
    </div>
  );
};

export default App;
