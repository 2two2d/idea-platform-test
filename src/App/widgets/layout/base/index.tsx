import {ReactElement} from "react";
import {Outlet} from "react-router";

const BaseLayout = (): ReactElement => {
    return (
        <div className='w-full m-auto pt-[80px]'>
            <Outlet/>
        </div>
    )
}

export default BaseLayout