import { Styles } from "react-jss";

type kStyles =
  | Styles
  | ((props: any) => Styles)
  | { [key: string]: string[] | Styles };
