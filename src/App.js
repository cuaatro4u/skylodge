import NavbarComponent from "./components/common/NavbarComponent";
import AboutComponent from "./components/Home/AboutComponent";
import DetailComponent from "./components/Home/DetailComponent";
import SpecialMenuComponent from "./components/Home/SpecialMenuComponent";
import TeamComponent from "./components/Home/TeamComponent";
import TestimonialComponent from "./components/Home/TestimonialComponent";
import TopComponent from "./components/Home/TopComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <TopComponent />
      <SpecialMenuComponent />
      <DetailComponent />
      <AboutComponent />
      <TeamComponent />
      <TestimonialComponent />
    </>
  );
}

export default App;
