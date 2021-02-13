import { addDecorator } from '@storybook/react'
import withGlobalStyle from './widthGlobalStyles'


addDecorator(withGlobalStyle)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
