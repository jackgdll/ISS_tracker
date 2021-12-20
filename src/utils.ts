export const formatTimestamp = (timestamp: number): string =>
Intl.DateTimeFormat("fr", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
}).format(timestamp * 1000);

export const pythag = (x1: number, y1: number, x2: number, y2: number): number =>
Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

export const last = (arr: any[]) => arr ? arr[arr.length > 0 ? arr.length - 1 : 0] : [];
