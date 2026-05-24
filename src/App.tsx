import "./App.css";

function App() {
  return (
    <>
      <input type="text" placeholder="Search..." className="search-input" />

      <select className="custom-select">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn">Submit</button>
    </>
  );
}

export default App;
