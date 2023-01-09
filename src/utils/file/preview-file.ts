import { filesProps } from "@src/pages/home";
import { verifyError } from "./error-file";

export interface previewFileProps {
  allFiles: filesProps[];
  setFilesList: (filesList: (newState: filesProps[]) => filesProps[]) => void;
}

export function previewFile({ allFiles, setFilesList }: previewFileProps) {
  allFiles.forEach(async (index) => {
    index.status = "await";
    verifyError(index);
    setFilesList((allFiles) => [...allFiles, index]);
  });
}
