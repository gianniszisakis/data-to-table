import { useState } from "react";
import type { Order } from "../../models/types";

interface AllDataTableProps {
  data: Order[];
}

export default function AllDataTable({ data }: AllDataTableProps) {
  const [showPaid, setShowPaid] = useState(false);

  const paid_orders = data?.filter((order: Order) => order?.status === "paid");

  function tableRender() {
    switch (showPaid) {
      case true:
        return paid_orders && paid_orders.length > 0 ? (
          paid_orders.map((order: Order) => (
            <tr key={order.id}>
              <td>{order.id ?? "-"}</td>
              <td>{order.customer?.name ?? "-"}</td>
              <td>{order.customer?.city ?? "-"}</td>
              <td>{order.status ?? "-"}</td>
              <td>{order.createdAt ?? "-"}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No Paid Orders</td>
          </tr>
        );
      case false:
        return data?.map((order: Order) => (
          <tr key={order?.id}>
            <td>{order?.id ?? "-"}</td>
            <td>{order?.customer?.name ?? "-"}</td>
            <td>{order?.customer?.city ?? "-"}</td>
            <td>{order?.status ?? "-"}</td>
            <td>{order?.createdAt ?? "-"}</td>
          </tr>
        ));
        break;
      default:
        return data?.map((order: Order) => (
          <tr key={order?.id}>
            <td>{order?.id ?? "-"}</td>
            <td>{order?.customer?.name ?? "-"}</td>
            <td>{order?.customer?.city ?? "-"}</td>
            <td>{order?.status ?? "-"}</td>
            <td>{order?.createdAt ?? "-"}</td>
          </tr>
        ));
    }
  }

  return (
    <>
      <h1>{`${showPaid ? `Paid Orders (${paid_orders?.length})` : `All data table (${data?.length})`}`}</h1>
      <div className="w-[50%]">
        <button className="btn" onClick={() => setShowPaid(!showPaid)}>
          {showPaid ? "Paid" : "All data"}
        </button>
      </div>
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

            <tbody>{tableRender()}</tbody>
          </table>
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
}
