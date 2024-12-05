export function createXmasTree(height: number, ornament: string): string {
  if (height === 0) {
    return "";
  }

  let n_ornaments = 1;
  let tree = "";
  for (let i = height; i > 0; i--) {
    tree += `${"_".repeat(i - 1)}${ornament.repeat(n_ornaments)}${"_".repeat(
      i - 1
    )}\n`;
    n_ornaments += 2;
  }
  tree += `${"_".repeat(height - 1)}\#${"_".repeat(height - 1)}\n`;
  tree += `${"_".repeat(height - 1)}\#${"_".repeat(height - 1)}`;

  return tree;
}
