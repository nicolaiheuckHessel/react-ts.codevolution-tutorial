import { BootstrapButtonProps } from './BootstrapButton.types'
import { EnumToString } from './BootstrapColor'

const BootstrapButton = ({ color, children, ...rest }: BootstrapButtonProps): JSX.Element => {
    const colorAsString = EnumToString(color);
    return (
        <button
            className={`btn btn-${colorAsString}`}
            {...rest}
        >{children}</button>
    )
}

export default BootstrapButton