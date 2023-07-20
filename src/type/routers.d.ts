import { RouteRecordName, RouteRecordRaw } from "vue-router";
declare type RouterTo = {
  (value: RouteRecordName): void;
  (value: RouteRecordRaw): void;
};
