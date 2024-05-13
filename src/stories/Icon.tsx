import clsx from "clsx";
import * as icons from "./assets/icons";
import { twMerge } from "tailwind-merge";

export type IconType = keyof typeof icons;
type IconVariant = "primary" | "outlined";
type IconSize = "sm" | "md" | "lg";

interface IconProps {
  /** 아이콘 종류 */
  name: IconType;
  /** 아이콘 타입 */
  variant?: IconVariant;
  /** 아이콘 크기 */
  size?: IconSize;
  /** 적용할 클래스명 */
  className?: string;
}

export const Icon = ({ name, variant = "outlined", size = "md", className }: IconProps) => {
  const iconClasses = twMerge(
    clsx("fill-none", {
      "stroke-white": variant === "outlined",
      "stroke-slate-900": variant === "primary",

      "w-4": size === "sm",
      "w-5": size === "md",
      "w-6": size === "lg",
    }),
    className,
  );

  const SVGIcon = icons[name];
  return <SVGIcon className={iconClasses} />;
};
