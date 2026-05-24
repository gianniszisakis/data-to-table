import { useState } from "react";
import type { Order } from "../../models/types";

interface SelectByCityTableProps {
  data: Order[];
}

export default function SelectByCityTable({ data }: SelectByCityTableProps) {
  const [selectedCity, setSelectedCity] = useState(data?.[0]?.customer?.city);

  const unique_cities = [
    ...new Set(data?.map((order: Order) => order?.customer?.city)),
  ];

  const filtered_city_data = data?.filter(
    (order: Order) => order?.customer?.city === selectedCity,
  );

  return (
    <>
      <h1>{`${selectedCity} Data`}</h1>
      <div className="w-[50%]">
        <label>
          Select City
          <select
            name="selectedCity"
            defaultValue="name"
            className="custom-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {unique_cities?.map((city: string) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="table-container">
        {filtered_city_data?.length && filtered_city_data?.length > 0 ? (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>City</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {filtered_city_data?.map((order: Order) => (
                <tr key={order?.id}>
                  <td>{order?.id ?? "-"}</td>
                  <td>{order?.customer?.name ?? "-"}</td>
                  <td>{order?.customer?.city ?? "-"}</td>
                  <td>{order?.status ?? "-"}</td>
                  <td>{order?.createdAt ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Data</p>
        )}
      </div>
    </>
  );
}
