import type { Order } from "../models/types";

export const orders: Order[] = [
  {
    id: "ORD-1001",
    customer: { id: "C-1", name: "Anna Petrova", city: "Athens" },
    status: "paid",
    createdAt: "2026-04-01",
    items: [
      {
        productId: "P-11",
        name: "Mechanical Keyboard",
        category: "electronics",
        quantity: 1,
        price: 120,
      },
      {
        productId: "P-12",
        name: "USB-C Cable",
        category: "electronics",
        quantity: 2,
        price: 12,
      },
    ],
  },
  {
    id: "ORD-1002",
    customer: { id: "C-2", name: "Mark Johnson", city: "Berlin" },
    status: "pending",
    createdAt: "2026-04-03",
    items: [
      {
        productId: "P-21",
        name: "Notebook",
        category: "books",
        quantity: 3,
        price: 8,
      },
      {
        productId: "P-22",
        name: "Desk Lamp",
        category: "home",
        quantity: 1,
        price: 35,
      },
    ],
  },
  {
    id: "ORD-1003",
    customer: { id: "C-3", name: "Elena Costa", city: "Athens" },
    status: "paid",
    createdAt: "2026-04-05",
    items: [
      {
        productId: "P-31",
        name: "Running Shoes",
        category: "fashion",
        quantity: 1,
        price: 95,
      },
      {
        productId: "P-32",
        name: "Socks Pack",
        category: "fashion",
        quantity: 4,
        price: 6,
      },
    ],
  },
  {
    id: "ORD-1004",
    customer: { id: "C-4", name: "Dimitris Allen", city: "Paris" },
    status: "cancelled",
    createdAt: "2026-04-06",
    items: [
      {
        productId: "P-41",
        name: "Paperback Novel",
        category: "books",
        quantity: 2,
        price: 14,
      },
    ],
  },
  {
    id: "ORD-1005",
    customer: { id: "C-5", name: "Nora Singh", city: "Rome" },
    status: "paid",
    createdAt: "2026-04-08",
    items: [
      {
        productId: "P-51",
        name: "Coffee Maker",
        category: "home",
        quantity: 1,
        price: 80,
      },
      {
        productId: "P-52",
        name: "Mug Set",
        category: "home",
        quantity: 2,
        price: 18,
      },
    ],
  },
  {
    id: "ORD-1006",
    customer: { id: "C-6", name: "George White", city: "Athens" },
    status: "pending",
    createdAt: "2026-04-09",
    items: [
      {
        productId: "P-61",
        name: "Smartwatch",
        category: "electronics",
        quantity: 1,
        price: 220,
      },
      {
        productId: "P-62",
        name: "Screen Protector",
        category: "electronics",
        quantity: 2,
        price: 10,
      },
    ],
  },
  {
    id: "ORD-1007",
    customer: { id: "C-7", name: "Mina Haddad", city: "Madrid" },
    status: "paid",
    createdAt: "2026-04-10",
    items: [
      {
        productId: "P-71",
        name: "Jacket",
        category: "fashion",
        quantity: 1,
        price: 150,
      },
      {
        productId: "P-72",
        name: "Beanie",
        category: "fashion",
        quantity: 1,
        price: 25,
      },
    ],
  },
  {
    id: "ORD-1008",
    customer: { id: "C-8", name: "Lukas Meyer", city: "Berlin" },
    status: "paid",
    createdAt: "2026-04-12",
    items: [
      {
        productId: "P-81",
        name: "Monitor",
        category: "electronics",
        quantity: 1,
        price: 300,
      },
      {
        productId: "P-82",
        name: "HDMI Cable",
        category: "electronics",
        quantity: 2,
        price: 15,
      },
    ],
  },
];
