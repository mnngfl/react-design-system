import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Icon, type IconType } from "./Icon";

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
  label?: string;
  /** 아이콘 종류 */
  icon?: IconType;
  /** 아이콘만 표시하는지 여부 */
  onlyIcon?: boolean;
  /** 로딩 중 여부 */
  loading?: boolean;
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

export const Button = ({
  variant = "primary",
  pill = false,
  size = "md",
  disabled = false,
  label = "",
  icon,
  onlyIcon = false,
  loading = false,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx("rounded-md justify-center items-center flex cursor-pointer", {
      "bg-slate-900 hover:bg-slate-700": variant === "primary",
      "bg-red-500 hover:bg-red-600": variant === "danger",
      "border border-slate-200 bg-white hover:bg-slate-100": variant === "outlined",
      "bg-slate-100 hover:bg-slate-200": variant === "subtle",
      "bg-white/opacity-0 hover:bg-slate-100": variant === "ghost",
      "bg-white/opacity-0 hover:underline": variant === "link",

      "min-w-16 h-8 p-2 gap-1": size === "sm",
      "min-w-24 h-10 p-2.5 gap-2": size === "md",
      "min-w-32 h-12 p-3 gap-2.5": size === "lg",

      "min-w-8": onlyIcon,

      "rounded-full": pill,

      "opacity-50 hover:bg- cursor-default": disabled,
    }),
  );
  const buttonTextClasses = clsx(`font-medium font-['Inter']`, {
    "text-white": variant === "primary" || variant === "danger",
    "text-slate-900": variant === "outlined" || variant === "subtle" || variant === "ghost",

    "text-xs": size === "sm",
    "text-sm": size === "md",
    "text-lg": size === "lg",
  });

  const iconVariant = variant === "primary" || variant === "danger" ? "outlined" : "primary";
  const iconName = icon || (loading ? "loader" : null);

  return (
    <div className={buttonClasses} onClick={onClick}>
      {iconName && (
        <div className="relative">
          {
            <Icon
              name={iconName}
              variant={iconVariant}
              size={size}
              {...(loading && { className: "animate-spin" })}
            />
          }
        </div>
      )}
      {!onlyIcon && (
        <button className={buttonTextClasses} disabled={disabled} {...props}>
          {label}
        </button>
      )}
    </div>
  );
};
