import { Icon } from "@iconify/react";
import "./FeatureButton.css";
import { MouseEventHandler } from "react";

const FeatureButton = ({ children, title, active = false, handleClick = () => {} }: {children: any, title: string, active: boolean, handleClick: MouseEventHandler}) => {
  return (
    <div className="w-full p-0 lg:pr-16">
      <div className={`w-full flex flex-col ${active ? 'bg-primary/10' : ''} border border-primary rounded-2xl cursor-pointer p-5`} onClick={handleClick}>
        <div className="w-full flex justify-between items-center">
          <span className={`text-${active ? 'primary' : 'gray-300'} text-2xl`}>{ title }</span>
          { active ?
            <Icon icon="icons8:minus" width={32} height={32} color="#2F80ED" /> :
            <Icon icon="icons8:plus" width={32} height={32} color="#2F80ED" />
          }
        </div>
        {active &&
          <span className="w-full text-gray-300 text-xl mt-6">
            {children}
          </span>
        }
        {/* {active &&
          <span className="border-t h-0 flex-1 hr-line" />
        } */}
      </div>
    </div>
  );
};

export default FeatureButton;
