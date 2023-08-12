import React, { ReactNode } from "react";

type Props = {
  provider: string;
  icon: () => JSX.Element;
  onPress: () => void;
};

const ProviderLoginBtn = (props: Props) => {
  const { onPress, icon: ProvIcon, provider } = props;
  return (
    <div
      onClick={onPress}
      className="items-center hover:shadow-2xl hover:cursor-pointer hover:translate-x-2 hover:-translate-y-1 py-3 transition-all flex  justify-center gap-10"
    >
      <span>Login Via {provider}</span>
      <div className="scale-150">
        <ProvIcon />
      </div>
    </div>
  );
};

export default ProviderLoginBtn;
