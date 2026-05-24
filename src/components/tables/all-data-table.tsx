import type { Order } from "../../models/types";

interface AllDataTableProps {
  data: Order[];
}

export default function AllDataTable({ data }: AllDataTableProps) {
  return (
    <>
      <h1>All data table</h1>
      <div className="table-container">
        {data?.length && data?.length > 0 ? (
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
              {data?.map((order: Order) => (
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
          <p>No data exist</p>
        )}
      </div>
    </>
  );
}
