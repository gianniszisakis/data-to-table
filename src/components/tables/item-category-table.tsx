import { useState } from "react";
import type { Order } from "../../models/types";

interface ItemCategoryTableProps {
  data: Order[];
}

type Category = "electronics" | "books" | "home" | "fashion";

export default function ItemCategoryTable({ data }: ItemCategoryTableProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("electronics");

  const unique_categories: Category[] = [
    ...new Set(
      data.flatMap((order) => order.items.map((item) => item.category)),
    ),
  ];

  const filtered_category_data = data.filter((order: Order) =>
    order.items.some((item) => item.category === selectedCategory),
  );

  return (
    <>
      <h1>{`${selectedCategory} Data`}</h1>
      <div className="w-[50%]">
        <label>
          Select Category
          <select
            name="selectedCategory"
            className="custom-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as Category)}
          >
            {unique_categories?.map((category: Category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="table-container">
        {filtered_category_data.length > 0 ? (
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
              {filtered_category_data.map((order: Order) => (
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
