import { Icon } from "@iconify/react";
import "./FeatureButton.css";

const FeatureButton = ({ children, active = false, onMouseEnter = () => {} }) => {
  return (
    <div className="w-full flex items-center relative" onMouseEnter={onMouseEnter}>
      <span
        className={`inline-flex items-center w-fit rounded-md ${active ? "bg-gray-150" : "bg-gray-50"} px-5 py-2 text-4xl text-gray-600 ring-1 ring-gray-500/10 ring-inset cursor-pointer`}
      >
        <Icon icon="fluent:arrow-right-32-regular" className="mr-2" />
        {children}
      </span>
      {active &&
        <span className="border-t h-0 flex-1 hr-line" />
      }
    </div>
  );
};

export default FeatureButton;
