import clsx from "clsx";
import type { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "danger" | "outlined" | "subtle" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  /** 버튼의 생김새 */
  variant?: ButtonVariant;
  /** 둥근 모양인지 여부 */
  pill?: boolean;
  /** 버튼의 크기 */
  size?: ButtonSize;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 버튼에 표시할 내용 */
  label: string;
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
}

export const Button = ({
  variant = "primary",
  pill = false,
  size = "md",
  disabled = false,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx("rounded-md justify-center items-center inline-flex cursor-pointer", {
      "bg-slate-900 hover:bg-slate-700": variant === "primary",
      "bg-red-500 hover:bg-red-600": variant === "danger",
      "border border-slate-200 bg-white hover:bg-slate-100": variant === "outlined",
      "bg-slate-100 hover:bg-slate-200": variant === "subtle",
      "bg-white/opacity-0 hover:bg-slate-100": variant === "ghost",
      "bg-white/opacity-0 hover:underline": variant === "link",

      "min-w-16 h-8 px-2 py-1": size === "sm",
      "min-w-24 h-10 px-4 py-2": size === "md",
      "min-w-32 h-12 px-6 py-4": size === "lg",
      "w-8 h-8 p-2": pill && size === "sm",
      "w-10 h-10 p-3": pill && size === "md",
      "w-12 h-12 p-4": pill && size === "lg",
      "rounded-full": pill,

      "opacity-50 hover:bg- cursor-default": disabled,
    }),
  );
  const buttonTextClasses = clsx(`text-sm font-medium font-['Inter']`, {
    "text-white": variant === "primary" || variant === "danger",
    "text-slate-900": variant === "outlined" || variant === "subtle" || variant === "ghost",
  });

  return (
    <div className={buttonClasses} onClick={onClick}>
      <button className={buttonTextClasses} disabled={disabled} {...props}>
        {label}
      </button>
    </div>
  );
};
