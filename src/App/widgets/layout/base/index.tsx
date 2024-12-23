import {ReactElement} from "react";
import {Outlet} from "react-router";

const BaseLayout = (): ReactElement => {
    return (
        <div className='w-[960px] pt-[140px] relative flex flex-col items-center gap-10'>
            <Outlet/>
        </div>
    )
}

export default BaseLayout