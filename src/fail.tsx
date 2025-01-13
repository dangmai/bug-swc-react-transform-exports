import React, { FC } from "react";

export const A: FC = () => {
  return <div>real a</div>;
};

const B: FC = () => {
  return <A />;
};

export default B;
