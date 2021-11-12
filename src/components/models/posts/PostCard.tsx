import React from "react";
import MyDisclosure from "~/components/ui/Disclosure";

type Props = {
  children?: string;
};

const PostCard: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <MyDisclosure title="ヨルシカやりたい" className="bg-gray-100 shadow-md">
        <div className="border-t border-blue-800 py-3 text-sm text-gray-700">
          <span>あの夏に咲けとかやりたい．夏フェスでたい．</span>
          <h4 className="font-semibold px-1 mt-3 mb-1 border-l-8 border-blue-800">
            募集パート
          </h4>
          <ul>
            <li>ボーカル</li>
            <li>ギター</li>
            <li>ベース</li>
            <li>キーボード</li>
          </ul>
        </div>
      </MyDisclosure>
    </>
  );
};

export default PostCard;
