import gsap from "gsap/all"
import { useRef } from "react"

const Cursor = () => {
    const cursorDiv = useRef(null)
    window.addEventListener('mousemove', function (dets) {
        gsap.from(cursorDiv.current, {
            x: dets.x,
            y: dets.y,
            duration: 0.5,
            ease: "bounce.out",
            transform: "translateX(50%)"
        })
    })
    return (
        <div ref={cursorDiv} className='fixed h-5 w-5 z-1 bg-[#f97316] rounded-full drop-shadow-[0_0_10px_#f97316] drop-shadow-[0_0_20px_#f97316] drop-shadow-[0_0_40px_#f97316]'>

        </div>
    )
}

export default Cursor
