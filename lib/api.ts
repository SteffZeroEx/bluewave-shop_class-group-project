import { Product } from "./types";

const API_URL = "http://localhost:8000/api";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products/`);

  if (!res.ok) {
    throw new Error("Produkte konnten nicht geladen werden");
  }

  return res.json();
}

export async function getProductById(id: number): Promise<Product | null> {
  const res = await fetch(`${API_URL}/products/${id}/`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
