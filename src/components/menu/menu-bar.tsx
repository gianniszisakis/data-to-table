interface MenuBarProps {
  selectedBtn: string;
  setSelectedBtn: React.Dispatch<React.SetStateAction<string>>;
}

export default function MenuBar({ selectedBtn, setSelectedBtn }: MenuBarProps) {
  return (
    <div className="button-row">
      <button
        className={`btn ${selectedBtn === "all-data" ? "active-btn" : ""}`}
        onClick={() => setSelectedBtn("all-data")}
      >
        All data
      </button>
      <button
        className={`btn ${selectedBtn === "total-amount" ? "active-btn" : ""}`}
        onClick={() => setSelectedBtn("total-amount")}
      >
        Total Amount
      </button>
    </div>
  );
}
