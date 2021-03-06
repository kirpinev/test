import React, { ReactElement } from 'react'

type LikeActiveIconProps = {
  className?: string
}

export const LikeActiveIcon = ({
  className
}: LikeActiveIconProps): ReactElement => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 87.7"
  >
    <path d="M91.5 45.1c10.1-10.1 10.1-26.5 0-36.5C81.4-1.5 65-1.5 54.9 8.6l-4.9 5-4.9-4.9C35-1.5 18.6-1.5 8.6 8.6 3.7 13.5 1.1 20 1.1 26.9s2.7 13.4 7.5 18.3L50 86.6l41.5-41.5z" />
  </svg>
)
