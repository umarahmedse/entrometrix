import { Icon } from "@iconify/react";
import "./FeatureButton.css";
import { MouseEventHandler } from "react";

const FeatureButton = ({ children, title, active = false, handleClick = () => {} }: {children: any, title: string, active: boolean, handleClick: MouseEventHandler}) => {
  return (
    <div className="w-full flex relative z-10 pr-0 lg:pr-16">
      {/* bg-line 8 */}
      {active &&
        <div className="w-0 relative hidden 2xl:block">
          <span className="absolute border-b border-l rounded-bl-2xl border-primary line-8" />
        </div>
      }

      <div className={`flex-1 flex flex-col ${active ? 'bg-[#0e2a42]' : ''} border border-primary rounded-2xl cursor-pointer p-5`} onClick={handleClick}>
        <div className="w-full flex justify-between items-center">
          <span className={`text-${active ? 'primary' : 'gray-300'} text-lg`}>{ title }</span>
          { active ?
            <Icon icon="icons8:minus" width={32} height={32} color="#2F80ED" /> :
            <Icon icon="icons8:plus" width={32} height={32} color="#2F80ED" />
          }
        </div>
        {active &&
          <span className="w-full text-gray-300 text-sm mt-6">
            {children}
          </span>
        }
      </div>

      {/* bg-line 2.5 */}
      {/* <div className="w-16 relative hidden lg:block">
        {active &&
          <span className="absolute border-t border-primary h-0 w-full top-1/2" />
        }
      </div> */}
    </div>
  );
};

export default FeatureButton;
