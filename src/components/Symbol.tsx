import { BaseProps } from "@/types/baseProps.type";
import SVG from "react-inlinesvg";

interface SymbolProps extends BaseProps {
  icon: string;
  size?: string;
}

const Symbol = (props: SymbolProps) => {
  const size = props.size || "w-8";
  const classes = `${props.className} ${size}`;
  const path = new URL(`/src/assets/symbols/${props.icon}.svg`, import.meta.url)?.href
  return <SVG src={path} className={classes} />;
};

export { type SymbolProps, Symbol };
