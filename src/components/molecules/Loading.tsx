import { cn } from '@/utils/styles'
import { BaseComponent } from '@/utils/types'
import { Loader } from 'lucide-react'

export const Loading = ({ children, className }: BaseComponent) => {
  return (
    <div className={cn('flex flex-col items-center my-12', className)}>
      {children ? (
        <div className="text-gray-600 text-xs mb-1">{children}</div>
      ) : null}
      <div>
        <Loader className="animate-spin" />
      </div>
    </div>
  )
}
