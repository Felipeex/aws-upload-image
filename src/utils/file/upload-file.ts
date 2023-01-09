import axios from "axios";
import { fileExtends } from "@src/pages/api/config/multer-config";
import { filesProps } from "@src/pages/home";
import { updateStatusFile } from "./update-file";

export interface UploadFileProps {
  awaitFiles: filesProps[];
  filesList: filesProps[];
  setFilesList: (newState: filesProps[]) => void;
}

export function UploadFile({
  awaitFiles,
  filesList,
  setFilesList,
}: UploadFileProps) {
  return new Promise((resolver, reject) => {
    awaitFiles.forEach(async (index) => {
      const formData = new FormData();
      formData.append("file", index);

      try {
        const { data } = await axios.post<fileExtends>(
          "/api/upload-file",
          formData
        );
        updateStatusFile({
          allFiles: filesList,
          setFilesList,
          status: "uploaded",
          infos: data,
        });

        resolver("uploaded files");
      } catch {
        reject("Internal error");
      }
    });
  });
}
