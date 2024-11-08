import { cn } from '@/utils/styles'
import { BaseComponent } from '@/utils/types'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export const StatCard = ({
  label,
  children,
  Icon,
  href,
  className,
}: {
  label: string
  Icon: LucideIcon
  href?: string
} & BaseComponent) => {
  const Comp = href ? Link : 'div'

  return (
    <Comp
      href={href || ''}
      className={cn(
        'bg-white shadow-lg p-6 flex items-center border rounded-lg',
        className,
      )}
    >
      <Icon className="mr-4 w-10 h-10 flex-shrink-0" strokeWidth={1} />

      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-2xl font-bold">{children}</p>
      </div>
    </Comp>
  )
}
