import React, {useState, useRef, useEffect} from 'react'
const DesktopHome = () =>{
    //states
    const [secondText, setSecondText] = useState(false);
    const [secondImg, setSecondImg] = useState(false);
    const [thirdText, setThirdText] = useState(false);
    const [thirdImg, setThirdImg] = useState(false);
    //references
    const secondTextRef = useRef(null);
    const secondImgRef = useRef(null);
    const thirdTextRef = useRef(null);
    const thirdImgRef = useRef(null);
    //scroll function 
    const handleScroll = () =>{
        //current position calculation = window height + pixels scrolled. 
        const windowHeight = window.innerHeight;
        const scrolledY = window.scrollY;
        const currentPosition = windowHeight + scrolledY;
        //second image and text 
        const secondTextPos = secondTextRef.current.offsetTop;
        const secondImgPos = secondImgRef.current.offsetTop;
        if(currentPosition >= secondTextPos){
            setSecondText(true);
        }else{
            setSecondText(false);
        }
        if(currentPosition >= secondImgPos){
            setSecondImg(true);
        }else{
            setSecondImg(false);
        }
        //third image and text
        const thirdTextPos = thirdTextRef.current.offsetTop;
        const thirdImgPos = thirdImgRef.current.offsetTop;
        if(currentPosition >= thirdTextPos){
            setThirdText(true);
        }else{
            setThirdText(false);
        }
        if(currentPosition >= thirdImgPos){
            setThirdImg(true);
        }else{
            setThirdImg(false);
        }
        //dollar signs
    }
    //effect
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () =>{window.removeEventListener('scroll', handleScroll);}
    },[])
    return(
        <>
        <div className="hide-sm-scr">
        <div className='flex my-10 justify-center h-[45rem]'>
            <div className='flex justify-between items-center w-5/6'>
                <div>
                    {
                        //first
                    }
                <h1 className='text-5xl text-left font-semibold enter-from-left'>One App For All Your <span className='border-b-4 border-green-300'>Crypto</span> Needs</h1>
                <p className="mt-3 enter-from-left">✅ Full Assistance On Crypto Trading</p>
                <p className="mt-3 enter-from-left">✅ 24/7 Customer Service</p>
                <button className="text-white bg-blue-500 py-1 px-1 rounded mt-3 enter-from-left">Sign Up!</button>
                </div>
                <div className='flex justify-end'>
                <img className="w-full border-2 border-gray-400 enter-from-right" src="https://img.freepik.com/premium-vector/cryptocurrency-technology-background-bitcoin-altcoins-vector-illustration_166207-435.jpg?w=1380" alt="bitcoin-image"/>
                </div>
            </div>
        </div>
        <div className='flex my-10 justify-center'>
            <div className='flex justify-between w-5/6'>
                <div>
                    {
                        //second
                    }
                <img className={`w-1/2 h-auto border-2 border-gray-400 rounded-md ${secondImg ? 'enter-from-left' : ` `}`}src="https://www.unfluke.in/static/media/g10.f644e042.png" alt="computer-image" ref={secondImgRef}/>
                </div>
                <div className='w-full'>
                <h1 className={`text-3xl text-left font-semibold ${secondText ? 'enter-from-right' : ''}`} ref={secondTextRef}>Invest Smartly!</h1>
                <p className={`mt-2 text-left ${secondText ? 'enter-from-right' : ' '}`}>Maximise your gains with our crypto experts.</p>
                </div>
            </div>
        </div>
        <div className='flex my-10 gap-10 justify-center'>
            <div className='flex justify-between w-5/6'>
                <div>
                    {
                        //third section
                    }
                <h1 className={`text-3xl text-left font-semibold ${thirdText ? 'enter-from-left' : ' '}`} ref={thirdTextRef}>Get the best returns!</h1>
                <p className={`mt-2 text-left ${thirdText ? 'enter-from-left' : ' '}`}>Make the best possible returns on your crypto investments.</p>
                </div>
                <div className={`w-1/4 flex flex-col justify-end`}>
                        <div className="flex justify-center">
                            <img className={`w-1/6 ${thirdImg ? 'animate-down' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                        </div>
                        <div className="flex justify-center">
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                        </div>
                        <div className="flex justify-center">
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign"/>
                            <img className={`w-1/6 ${thirdImg? 'enter-from-right' : ' '}`} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg" alt="dollar-sign" ref={thirdImgRef}/>
                        </div>
                </div>
            </div>
        </div>
        <div className='flex my-10 gap-10 justify-center'>
            <div className='flex flex-col w-5/6'>
                <div>
                <h2 className="text-2xl font-semibold">Our Cryptos: </h2>
                </div>
                <div className="my-2">
                <div className="flex flex-row overflow-x-scroll gap-5 hide-scroll-bar">
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://thumbs.dreamstime.com/b/ethereum-logo-editorial-illustrative-white-background-ethereum-logo-editorial-illustrative-white-background-eps-download-208329253.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://img.freepik.com/premium-vector/bitcoin-vector-glyph-btc-square-vector-icon-white-symbol-orange-gradient-background_822686-891.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='data:image/png;base64,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' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://cdn-icons-png.flaticon.com/512/6001/6001833.png' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://img.freepik.com/premium-vector/tether-flat-coin_48203-271.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://thumbs.dreamstime.com/b/usdc-usd-coin-crypto-coins-cryptocurrency-logo-market-emblem-icos-tokens-134851185.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://thumbs.dreamstime.com/b/vector-logo-litecoin-ltc-icon-cryptocurrency-litecoin-symbol-vector-illustration-ltc-logo-cryptocurrency-sign-white-238988121.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://thumbs.dreamstime.com/b/tron-cryptocurrency-symbol-cryptocurrency-tron-symbol-isolated-white-background-110066355.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://img.freepik.com/premium-psd/avalanche-avax-badge-3d-rendering-coin_525043-1449.jpg' />
                <img className="w-1/6 h-1/6 border-2 border-gray-400 rounded-md" src='https://static-00.iconduck.com/assets.00/polkadot-dot-icon-256x256-2vbf2wrs.png' />
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default DesktopHome;
