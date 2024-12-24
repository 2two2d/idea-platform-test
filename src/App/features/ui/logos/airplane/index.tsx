import {ReactElement} from "react"
import airplaneLogoSource from "@shared/ui/assets/images/airplane_logo.png"
import {ILogoProps} from "@shared/interface";

const AirplaneLogo = ({ className, width = 60, height = 60, ...props }: ILogoProps): ReactElement => {
    return (
        <img src={ airplaneLogoSource }
            className={ className }
            width={ width }
            height={ height }
            alt="img"
            { ...props }
        />
    )
}

export default AirplaneLogo