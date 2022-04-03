import { AlertType } from "@/types/alert.type";
import { BaseProps } from "@/types/baseProps.type";

interface AlertProps extends BaseProps {
  type?: AlertType;
}

const Alert = ({ type = AlertType.INFO, ...props }: AlertProps) => {
  const variants = {
    [AlertType.ERROR]: "bg-red-400",
    [AlertType.INFO]: "bg-green-400",
  };

  return (
    <div className={`p-4 text-white shaddow-xl rounded-xl ${variants[type]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export { type AlertProps, Alert };
