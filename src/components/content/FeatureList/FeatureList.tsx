import "./FeatureList.css";

import type { ComponentPropsWithoutRef } from "react";

type FeatureListProps = ComponentPropsWithoutRef<"ol"> & {
  as?: "ol" | "ul";
};

export default function FeatureList({
  as: Component = "ol",
  className = "",
  children,
  ...props
}: FeatureListProps) {
  return (
    <Component className={`feature-list ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
