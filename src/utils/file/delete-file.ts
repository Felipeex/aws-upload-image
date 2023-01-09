import { filesProps } from "@src/pages/home";
import { UploadFileProps } from "./upload-file";

export interface deleteFileProps {
  file: filesProps;
  allFiles: filesProps[];
  setFilesList: UploadFileProps["setFilesList"];
}

export function deleteFile({ file, allFiles, setFilesList }: deleteFileProps) {
  const deletedFile = allFiles.filter(
    (index) => allFiles.indexOf(index) !== allFiles.indexOf(file)
  );
  setFilesList(deletedFile);
}
