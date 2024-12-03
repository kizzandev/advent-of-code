export function createFrame(names: string[]): string {
  const longestName = Math.max(...names.map((name) => name.length));

  let result = "*".repeat(longestName + 4) + "\n";

  for (const name of names) {
    result += `* ${name.concat(" ".repeat(longestName - name.length))} *\n`;
  }

  result += "*".repeat(longestName + 4);  

  return result;
}
