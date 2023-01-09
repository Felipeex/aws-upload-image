import { filesProps } from "@src/pages/home";
import { deleteFileProps } from "./delete-file";

interface updateFileProps extends deleteFileProps {
  status: filesProps["status"];
  infos: filesProps["infos"];
}

export function updateStatusFile({
  file,
  allFiles,
  setFilesList,
  status,
  infos,
}: updateFileProps) {
  let filesUpdated: filesProps[] = [];
  allFiles.forEach(async (index) => {
    if (allFiles.indexOf(index) === allFiles.indexOf(file)) {
      index.infos = infos;
      index.status = status;
    }
    filesUpdated.push(index);
  });
  setFilesList(filesUpdated);
}
