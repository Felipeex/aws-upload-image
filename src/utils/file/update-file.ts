import { filesProps } from "@src/pages/home";
import { deleteFileProps } from "./delete-file";

interface updateFileProps extends Omit<deleteFileProps, "file"> {
  status: filesProps["status"];
  infos: filesProps["infos"];
}

export function updateStatusFile({
  allFiles,
  setFilesList,
  status,
  infos,
}: updateFileProps) {
  let filesUpdated: filesProps[] = [];
  allFiles.forEach(async (index) => {
    index.status = status;
    index.infos = infos;
    filesUpdated.push(index);
  });
  setFilesList(filesUpdated);
}
