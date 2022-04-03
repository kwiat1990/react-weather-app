import { Symbol } from "@/components/Symbol";
import { BaseProps } from "@/types/baseProps.type";
import { Forecast } from "@/types/forecast.type";

interface CardProps extends BaseProps {
  forecast: Forecast;
}

const Card = (props: CardProps) => {
  const formatTemperature = (temp: number) => {
    return `${Math.floor(temp)} °C`;
  };

  const formatWindSpeed = (val = 0) => {
    return `${val?.toFixed(1)} km/h`;
  };

  return (
    <section
      className={`p-6 text-base text-center bg-white border shadow-lg md:p-8 rounded-xl md:text-left ${props.className}`}
    >
      <div className="text-right">{props.children}</div>

      <div className="items-center justify-between gap-8 text-4xl font-bold md:flex">
        <div className="mb-4">
          <div>{props.forecast?.city}</div>
          <div className="text-base font-normal">{props.forecast?.description}</div>
        </div>
        {props.forecast?.icon && (
          <Symbol className="block m-auto mb-4 md:mr-0" icon={props.forecast?.icon} size="w-16" />
        )}
        <div>{formatTemperature(props.forecast?.temp?.current)}</div>
      </div>

      <div className="gap-8 mt-4 md:justify-between md:items-center md:flex">
        <span>
          Wind: {formatWindSpeed(props.forecast?.wind?.speed)} ({props.forecast?.wind?.direction})
        </span>
        <div className="mt-2 space-x-8">
          <span>Low: {formatTemperature(props.forecast?.temp?.min)}</span>
          <span>High: {formatTemperature(props.forecast?.temp?.max)}</span>
        </div>
      </div>
    </section>
  );
};

export { type CardProps, Card };
