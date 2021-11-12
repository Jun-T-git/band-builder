import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

type Props = {
  title: string;
  children: JSX.Element;
  className?: string;
};

/**
 * Disclosureコンポーネント
 * @param title open/close時に表示
 * @param children open時のみ表示
 * @param className
 */

const MyDisclosure: React.VFC<Props> = ({ title, children, className }) => {
  return (
    <div className={`border rounded-lg ${className}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="px-3 py-2 w-full font-semibold flex justify-between items-center">
              <h3 className="">{title}</h3>
              <ChevronRightIcon
                scale="10px"
                className={`w-6 h-6 ${open ? "transform rotate-90" : ""}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-3 w-full">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MyDisclosure;
