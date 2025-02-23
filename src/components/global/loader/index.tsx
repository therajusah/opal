import React from "react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

type Props = {
  state: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
};

const Loader = ({ state, color, className, children }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
