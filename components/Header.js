import React from 'react';
import Image from 'next/image'
import logo from '../assets/logo.png'
import {useContext} from 'react'
import {TeamUpContext} from '../context/TeamUpContext.js'
const style = {
    wrapper: `h-24 py-11 text-white flex w-screen items-center px-16 justify-evenly`,
    main: `flex items-center gap-4`,
    teamupText: `text-5xl font-semibold mr-8 cursorpinter`,
    leftMenu: `flex gap-8 text-lg`,
    menuItem: `cursor-pointer hover:text-red-400 durations-300 hover:scale-110`,
    rightMenu: `flex gap-3 items-center`,
    authButton: `bg-white font-bold text-red-500 px-8 py-3 items-center rounded-lg hover:bg-red-500 duration-300 hover:text-white ml-10 `,
    currentAccount: `px-2 py-1 border border-gray-500 rounded-full flex items-center`,
    accountAddress: `ml-2`,
}
const currentAccount =""
const Header = () => {
    const { connectWallet, currentAccount, disconnectWallet} = useContext(TeamUpContext)
    return (
        <div className={`${style.wrapper} ${
             currentAccount ? 'bg-gray-900': 'bg-transparent fixed'
        }`}
        >
            <div className={style.main}>
                <Image src={logo} alt='logo' height={70} width={70}/>
                <h1 className={style.teamupText}>teamUP</h1>
                <div className={style.rightMenu}>
                    {currentAccount ? (
                        <>
                            <div className={style.currentAccount}>
                                <Image 
                                    src ={
                                        'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg'
                                    }
                                    alt='moralisWhiteLogo'
                                    height={20}
                                    width={20}
                                />
                                <span className={style.accountAddress}>
                                    {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
                                </span>
                            </div>
                            <button 
                            className={style.authButton}
                            onClick={() => disconnectWallet()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <button className={style.authButton} onClick={() => connectWallet()}>
                            Login
                        </button>
                    )}
                </div>
            </div>        
        </div>
    )
}
export default Header