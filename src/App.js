import "./App.scss";
import ImageList from "./components/ImageList";
import SearchInput from "./components/SearchInput";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ImageList />
      <AddButton />
    </div>
  );
}

export default App;
