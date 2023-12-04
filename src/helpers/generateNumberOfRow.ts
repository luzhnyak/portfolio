export const generateNumberOfRow = (text: string): string => {
  const countRow = text.split("\n").length - 1;

  let namberOfRow = "";

  for (let i = 1; i <= countRow + 1; i++) {
    namberOfRow += `${i}\n`;
  }

  return namberOfRow;
};
