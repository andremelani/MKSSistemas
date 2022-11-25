import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { debug } from 'console';
import Cart from './Cart'

describe('Cart Component', () => {
    it('should render list items' , () => {
        const { getByText } = render(<Cart />)

        expect(getByText('Headset Cloud Stinger')).toBeInTheDocument()
    });

    it('should be able to increment a new item to the list', () => {
        const { getByText } = render(<Cart />)

        const addButton = getByText('+')
        userEvent.click(addButton)

        expect(getByText('2')).toBeInTheDocument()

    })
})