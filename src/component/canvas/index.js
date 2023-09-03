import { Fragment } from "react"
import { useOnDraw } from '../../hooks/canvas'

const canvasStyle = {
    border: "1px solid black"
}
const Canvas = ({width, height, ...prop}) => {

        useOnDraw()
        
        return (
            <Fragment key={'drawArea'}>
                <canvas 
                    width={width}
                    height={height}
                    style={canvasStyle}
                    className={prop.className}
                />
            </Fragment>
        )
}

export default Canvas