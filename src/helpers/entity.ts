import { EntityState } from "@reduxjs/toolkit";

export const getFromEntity = <T>(data?: EntityState<T>) => {
  return {
    entity: Object.values(data?.entities ?? { _: [] }),
  };
};

export const genarateEmptyList = (props?: { qty?: number }) => {
  const { qty = 10 } = props ?? {};
  const temp = [];
  for (let i = 0; i < qty; ++i) {
    temp.push("loading");
  }
  return temp;
};
