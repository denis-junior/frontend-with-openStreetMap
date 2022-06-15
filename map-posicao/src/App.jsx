import Maps from "./Maps";
import SearchBox from "./SearchBox";

function App() {
  return (
    <>
    <SearchBox/>
    <Maps center={[-1.437972, -48.466901]} positions={[[-1.437972, -48.466901], [-1.44, -48.466901]]}/>
    </>
  );
}

export default App;
