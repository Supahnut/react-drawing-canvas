
import { useRef } from "react"

export const useOnDraw = () => {

    const canvasRef = useRef(null)

    const setCanvasRef = (ref) => {
        if(!ref) { 
            return
        } else {
            canvasRef = ref
        }
        
    }

    return setCanvasRef
}

