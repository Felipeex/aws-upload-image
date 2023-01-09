import { filesProps } from "@src/pages/home";
import { fileConfig } from "./config-file";

export function verifyError(file: filesProps) {
  if (!fileConfig.types.includes(file.type)) {
    file.error = fileConfig.errors["Invalid file type"];
  }

  if (file.size > fileConfig.maxSize) {
    file.error = fileConfig.errors["File too large"];
  }
}
