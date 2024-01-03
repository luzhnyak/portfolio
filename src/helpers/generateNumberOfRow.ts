export const generateNumberOfRow = (countRow: number): string => {
  let namberOfRow = "1   /**\n";

  for (let i = 2; i <= countRow; i++) {
    namberOfRow += `${String(i).padEnd(3, " ")} *\n`;
  }

  return namberOfRow.trim() + "/";
};
