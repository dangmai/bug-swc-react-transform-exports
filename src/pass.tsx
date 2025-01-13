import React, { FC } from "react";

export const A: FC = () => {
  return <div>real a</div>;
};

const B: FC = () => {
  return React.createElement(A, null);
};

export default B;
