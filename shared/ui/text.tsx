import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils/cn'

const textVariants = cva('leading-tight font-medium', {
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm font-medium',
            base: 'text-base font-medium',
            lg: 'text-lg font-semibold dark:font-normal',
            xl: 'text-xl font-semibold dark:font-normal',
            '2xl': 'text-2xl font-semibold',
            '3xl': 'text-3xl font-semibold',
            '4xl': 'text-4xl font-semibold',
            '5xl': 'text-5xl font-bold',
            '6xl': 'text-6xl font-bold',
            '7xl': 'text-7xl font-bold',
            '8xl': 'text-8xl font-bold',
        },
        variant: {
            primary: 'text-text-primary',
            secondary: 'text-text-secondary',
            tertiary: 'text-text-tertiary',
        },
    },
    defaultVariants: {
        size: 'base',
        variant: 'primary',
    },
})

export interface TextProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements
}

const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ className, size, variant, as = 'p', ...props }, ref) => {
        return React.createElement(as, {
            ref,
            className: cn(textVariants({ size, variant, className })),
            ...props,
        })
    }
)
Text.displayName = 'Text'

export { Text, textVariants }
