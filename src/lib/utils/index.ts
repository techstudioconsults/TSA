import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const shrinkString = ({
//   str,
//   len,
// }: {
//   str?: string;
//   len: number;
// }): string => {
//   if (!str) return "";
//   if (str.length > len) {
//     return str.slice(0, Math.max(0, len)) + "...";
//   }
//   return str;
// };

// export const encryptString = (string_?: string): string => {
//   if (!string_) return "";
//   const buffer = Buffer.from(string_);
//   return buffer.toString("base64");
// };

// export const decryptString = (string_?: string): string => {
//   if (!string_) return "";
//   const buffer = Buffer.from(string_, "base64");
//   return buffer.toString();
// };

// export const formatTime = (time: number): string => {
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// };

// export function getCurrentDateTime() {
//   const now = new Date();

//   // Using moment to format the date and time
//   const date_added = moment(now).format("YYYY-MM-DD");
//   const time = moment(now).format("HH:mm:ss");

//   return {
//     date_added,
//     time,
//   };
// }

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "USD", notation = "compact" } = options;

  const numericPrice =
    typeof price === "string" ? Number.parseFloat(price) : price;
  const newPrice = new Intl.NumberFormat("en-US", {
    currency,
    notation,
    style: "currency",
    maximumFractionDigits: 2,
  }).format(numericPrice);
  return newPrice;
}
