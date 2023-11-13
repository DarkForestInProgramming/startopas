import { ReactNode } from "react";

export interface RootInterface {
  children: ReactNode;
}

export interface MetaInterface {
  title?: string;
  description?: string;
  keywords?: string;
}
