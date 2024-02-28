import './button.styles.css';
import Loader from "../Loader/Loader.tsx";
import {IButton} from "./button.models.ts";

const Button = ({ isLoading, text, ...props }: IButton) => {
    return (
        <button className='button' {...props}>
            {
                isLoading ? <Loader /> : text
            }
        </button>
    )
}

export default Button;