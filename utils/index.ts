export const shrinkString = ({
  str,
  len,
}: {
  str?: string;
  len: number;
}): string => {
  if (!str) return "";
  if (str.length > len) {
    return str.slice(0, Math.max(0, len)) + "...";
  }
  return str;
};

export const encryptString = (string_?: string): string => {
  if (!string_) return "";
  const buffer = Buffer.from(string_);
  return buffer.toString("base64");
};

export const decryptString = (string_?: string): string => {
  if (!string_) return "";
  const buffer = Buffer.from(string_, "base64");
  return buffer.toString();
};

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
