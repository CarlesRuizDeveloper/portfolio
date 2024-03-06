import Header from "./components/Header";
import ContactInfoCard from "./components/ContactInfoCard";
import ReactiveScreen from "./components/ReactiveScreen";

function App() {
  return (
    <main className="pt-6">
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Div de ContactInfoCard */}
        <div className="w-full lg:w-[43%]">
          <ContactInfoCard />
        </div>
        {/* Div de ReactiveScreen */}
        <div className="w-full lg:w-[57%]">
          <ReactiveScreen />
        </div>
      </div>
    </main>
  );
}

export default App;
