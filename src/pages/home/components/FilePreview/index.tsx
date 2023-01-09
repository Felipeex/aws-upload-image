import { filesProps } from "../..";
import { Container } from "./style.css";

interface rootProps {
  file: filesProps;
  children: React.ReactNode;
}

function Root({ file, children }: rootProps) {
  return (
    <Container {...file} status={file.status} error={!!file.error}>
      <span>{file.name}</span>
      {children}
    </Container>
  );
}

interface buttonProps {
  children: React.ReactNode;
}

function Button(props: buttonProps) {
  return <>{props.children}</>;
}

export { Root, Button };
