import Header from "./components/Header";
import ContactInfoCard from "./components/ContactInfoCard";
import ReactiveScreen from "./components/ReactiveScreen";

function App() {
  return (
    <main className="mt-0">

      <Header />
      <div className="flex flex-col lg:flex-row">
       
        <div className="w-full lg:w-[43%]">
          <ContactInfoCard />
        </div>
       
        <div className="w-full lg:w-[57%] bg-green-400 m-0" >
          <ReactiveScreen />
        </div>

      </div>
    </main>
  );
}

export default App;
