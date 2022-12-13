import { PropsWithChildren } from 'react'
import { Button, ButtonProps } from 'antd'

export const CustomButton = ({ children, ...buttonProps}: PropsWithChildren<Omit<ButtonProps, 'onClick'>>) => {
  const handleOnClick = () => {
    console.warn('You clicked meeeee')
  }

  return <Button {...buttonProps} onClick={handleOnClick}>{children}</Button>
}