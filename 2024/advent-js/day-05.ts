export type Shoe = {
  type: "I" | "R";
  size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
  const countMap: Record<number, { I: number; R: number }> = {};

  for (const { size, type } of shoes) {
    if (!countMap[size]) countMap[size] = { I: 0, R: 0 };
    countMap[size][type]++;
  }

  const result: number[] = [];
  for (const size in countMap) {
    const { I, R } = countMap[size];
    const pairs = Math.min(I, R);
    for (let i = 0; i < pairs; i++) {
      result.push(Number(size));
    }
  }

  return result;
}
