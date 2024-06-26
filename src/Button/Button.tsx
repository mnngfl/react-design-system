import { twMerge } from 'tailwind-merge'
import { Icon, type IconType } from '../Icon'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'w-fit rounded-md justify-center items-center inline-flex cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-slate-900 hover:bg-slate-700 active:bg-slate-600',
        danger: 'bg-red-600 hover:bg-red-700 active:bg-red-800',
        outlined: 'border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100',
        subtle: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300',
        ghost: 'bg-white/opacity-0 hover:bg-slate-100 active:bg-slate-200',
        link: 'bg-white/opacity-0 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 gap-x-1',
        md: 'h-10 px-4 gap-x-1.5',
        lg: 'h-12 px-5 gap-x-2',
      },
      onlyIcon: {
        true: {},
      },
      pill: {
        true: 'rounded-full',
      },
      loading: {
        true: 'cursor-wait',
      },
      disabled: {
        true: 'opacity-50 hover:bg- active:bg- cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        onlyIcon: true,
        class: 'px-2',
      },
      {
        size: 'md',
        onlyIcon: true,
        class: 'px-2.5',
      },
      {
        size: 'lg',
        onlyIcon: true,
        class: 'px-3',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

const buttonTextStyles = cva(`font-normal font-sans my-auto`, {
  variants: {
    variant: {
      primary: 'text-white',
      danger: 'text-white',
      outlined: 'text-slate-900',
      subtle: 'text-slate-900',
      ghost: 'text-slate-900',
      link: 'text-slate-900',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-lg',
    },
    loading: {
      true: 'cursor-wait',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonVariant = 'primary' | 'danger' | 'outlined' | 'subtle' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type DivProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonStyles> & {
    /** 버튼의 생김새 */
    variant?: ButtonVariant
    /** 둥근 모양인지 여부 */
    pill?: boolean
    /** 버튼의 크기 */
    size?: ButtonSize
    /** 버튼 비활성화 여부 */
    disabled?: boolean
    /** 버튼에 표시할 내용 */
    label?: string
    /** 아이콘 종류 */
    icon?: IconType
    /** 아이콘만 표시하는지 여부 */
    onlyIcon?: boolean
    /** 로딩 중 여부 */
    loading?: boolean
    /** 추가 클래스 */
    className?: string
    /** 클릭 시 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
  }

const Button: React.FC<ButtonProps & DivProps> = ({
  variant = 'primary',
  pill = false,
  size = 'md',
  disabled = false,
  label = '',
  icon,
  onlyIcon = false,
  loading = false,
  className,
  onClick,
  ...props
}) => {
  const iconVariant = variant === 'primary' || variant === 'danger' ? 'outlined' : 'primary'
  const iconName = icon || (loading ? 'loader' : null)

  return (
    <div
      className={twMerge(
        buttonStyles({ variant, size, onlyIcon, pill, loading, disabled }),
        className,
      )}
      onClick={!loading && !disabled ? onClick : undefined}
    >
      {iconName && (
        <div className="relative">
          {
            <Icon
              name={iconName}
              variant={iconVariant}
              size={size}
              {...(loading && { className: 'animate-spin' })}
            />
          }
        </div>
      )}
      {!onlyIcon && (
        <button
          className={twMerge(buttonTextStyles({ variant, size, loading, disabled }))}
          disabled={disabled}
          {...props}
        >
          {label}
        </button>
      )}
    </div>
  )
}

export default Button
