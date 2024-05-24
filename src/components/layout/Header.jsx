import React,{useState} from 'react'
import {MenuOutlined} from '@ant-design/icons'
const Header = () => {
    const [navCollapse, setNavCollapse] = useState('hidden');
    const handleNavCollapse = ()=>{
        if(navCollapse == 'hidden'){
            setNavCollapse('block');
        }else{
            setNavCollapse('hidden');
        }
    }
    return(
        <>
        <nav className="sticky top-0 h-10 z-10 bg-white">
            <div className="flex flex-row justify-between lg:hidden">
            <p className="text-2xl">CryptGain</p>
            <button onClick = {handleNavCollapse}>
            <MenuOutlined className="text-black text-2xl"/>
            </button>
            <div className={`absolute inset-x-0 inset-y-1 my-10 ${navCollapse} `}>
                <ul className="text-center bg-white z-10 shadow-md">
                    <li className="my-1">Home</li>
                    <li className="my-1">About Us</li>
                    <li className="my-1">Careers</li>
                    <li className="my-1">Contact</li>
                    <li className="my-1"><button className="text-white bg-blue-500 py-1 px-1 rounded">Login</button></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-center hide-sm-scr">
                <div className="flex w-5/6 justify-between">
                    <p className="text-3xl">CryptGain</p>
                    <ul className="flex flex-row gap-2 items-center">
                    <li className="">Home</li>
                    <li className="">About Us</li>
                    <li className="">Careers</li>
                    <li className="">Contact</li>
                    <li className=""><button className="text-white bg-blue-500 py-1 px-1 rounded">Login</button></li>
                    </ul>
                </div>
                </div>
        </nav>
        </>
    );
}
export default Header;