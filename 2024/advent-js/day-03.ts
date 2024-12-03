type Inventory = Array<{ name: string; quantity: number; category: string }>;

export function organizeInventory(inventory: Inventory): object {
  const result = {};

  for (const item of inventory) {
    result[item.category] = result[item.category] || {};

    result[item.category][item.name] =
      (result[item.category][item.name] ?? 0) + item.quantity;
  }

  return result;
}
