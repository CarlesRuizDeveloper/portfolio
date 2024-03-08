import Header from "./components/Header";
import ContactInfoCard from "./components/ContactInfoCard";
import ReactiveScreen from "./components/ReactiveScreen";
import PhoneContactInfoCard from "./components/PhoneContactInfoCard";
import useWindowDimensions from "./components/useWindowSize";

function App() {

  const { width } = useWindowDimensions();
  const isTabletOrPhone = width <= 768;

  return (
    <main className="mt-0">

      <Header />
      <div className="flex flex-col lg:flex-row ">
       
        <div className="w-full lg:w-[41%] ">
            {isTabletOrPhone ? <PhoneContactInfoCard /> : <ContactInfoCard />}
        </div>
       
        <div className="w-full lg:w-[59%] bg-green-400 m-0" >
          <ReactiveScreen />
        </div>

      </div>
    </main>
  );
}

export default App;
