import { BootstrapButtonProps } from './BootstrapButton.types'
import { EnumToString } from './BootstrapColor'

const BootstrapButton = (props: BootstrapButtonProps): JSX.Element => {
    const colorAsString = EnumToString(props.color);
    return (
        <button 
        className={`btn btn-${colorAsString}`} 
        onClick={props.onClick}
        style={props.style}
        >{props.children}</button>
    )
}

export default BootstrapButton