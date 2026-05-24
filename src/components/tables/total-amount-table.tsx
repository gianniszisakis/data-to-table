import type { Order, TotalAmountData } from "../../models/types";

interface TotalAmountTableProps {
  data: Order[];
}

export default function TotalAmountTable({ data }: TotalAmountTableProps) {
  const total_amount_data: TotalAmountData[] = data?.map((order: Order) => {
    const total_amount = order?.items?.reduce((sum, item) => {
      return sum + item?.quantity * item?.price;
    }, 0);

    const itemCount = order?.items?.reduce((sum, item) => {
      return sum + item?.quantity;
    }, 0);

    return {
      id: order?.id,
      customerName: order?.customer?.name,
      city: order?.customer?.city,
      status: order?.status,
      total_amount,
      item_count: itemCount,
    };
  });

  return (
    <>
      <h1>Total Amount</h1>
      <div className="table-container">
        {total_amount_data?.length && total_amount_data?.length > 0 ? (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>City</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Item Count</th>
              </tr>
            </thead>

            <tbody>
              {total_amount_data?.map((order: TotalAmountData) => (
                <tr key={order?.id}>
                  <td>{order?.id ?? "-"}</td>
                  <td>{order?.customerName ?? "-"}</td>
                  <td>{order?.city ?? "-"}</td>
                  <td>{order?.status ?? "-"}</td>
                  <td>{order?.total_amount ?? "-"}</td>
                  <td>{order?.item_count ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No total amount</p>
        )}
      </div>
    </>
  );
}
