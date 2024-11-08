import Link from 'next/link'

import { cn } from '@/utils/styles'
import { DeveloperInfo } from './DeveloperInfo'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(
          'hover:underline font-semibold underline-offset-4 text-primary-500',
        )}
      >
        Aicademy
      </Link>
      <DeveloperInfo />
    </div>
  )
}
