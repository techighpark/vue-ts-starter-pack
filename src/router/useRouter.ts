// types
import { RouteRecordName, RouteRecordRaw, Router } from "vue-router";

type RouterTo = {
  (value: RouteRecordName, router: Router): Promise<void>;
  (value: RouteRecordRaw, router: Router): Promise<void>;
};

/*
|------------------------------------------------------------------------------------------
| route push
|------------------------------------------------------------------------------------------
*/
export const routerTo: RouterTo = async (value, router) => {
  if (typeof value === "object") await router.push({ name: value.name });
  if (typeof value === "string") await router.push({ name: value });
};
