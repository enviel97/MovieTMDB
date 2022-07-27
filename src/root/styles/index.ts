import globalStyles from "./customs";
import preset from "jss-preset-default";
import jss from "jss";
import { SheetsRegistry } from "react-jss";
import jssNestest from "jss-plugin-nested";

export const jssPlugin = jss.use(jssNestest());

export const genarateId = (rule: any, _: any) => rule.key;

const setupJss = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss
    .createStyleSheet(
      { "@global": globalStyles },
      { index: -1, meta: "styles", link: false }
    )
    .attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
};

export default setupJss;
