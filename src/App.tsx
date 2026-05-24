import { useState } from "react";
import "./App.css";
import MenuBar from "./components/menu/menu-bar";
import AllDataTable from "./components/tables/all-data-table";
import { orders } from "./data/orders_data";

function App() {
  const [selectedBtn, setSelectedBtn] = useState("all-data");

  function tableRender() {
    switch (selectedBtn) {
      case "all-data":
        return <AllDataTable data={orders} />;
        break;
      default:
        return <AllDataTable data={orders} />;
    }
  }

  return (
    <>
      <MenuBar setSelectedBtn={setSelectedBtn} selectedBtn={selectedBtn} />
      {tableRender()}
    </>
  );
}

export default App;
