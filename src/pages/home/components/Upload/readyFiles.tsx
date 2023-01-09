import * as FilePreview from "../FilePreview";
import { Link } from "phosphor-react";
import { File, Files, FilesTitle } from "../../style.css";
import { filesProps } from "../..";

interface readyFilesProps {
  filesList: filesProps[];
}

export function ReadyFiles({ filesList }: readyFilesProps) {
  const readyFiles =
    filesList.filter(({ status }) => status === "uploaded") || null;

  return (
    <>
      {readyFiles && readyFiles.length > 0 && (
        <>
          <FilesTitle>Prontos</FilesTitle>
          <Files>
            {readyFiles.map((index, key) => (
              <File key={key}>
                <FilePreview.Root file={index}>
                  <FilePreview.Button>
                    <a href={index.infos.location} target="_blank">
                      <Link size={16} weight="fill" color="#000" />
                    </a>
                  </FilePreview.Button>
                </FilePreview.Root>
                <span>{index.error}</span>
              </File>
            ))}
          </Files>
        </>
      )}
    </>
  );
}
