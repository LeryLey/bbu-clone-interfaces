import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import Heros from "./pages/Heros";
const App = () => {
  return (
    <div className="min-h-[5000vh]">
      <HeaderTop />
      <Navbar />
      {/* hero  */}
      <Heros />
    </div>
  );
};

export default App;
