import React from "react"
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import TinderCard from 'react-tinder-card'
import displayPicture from '../assets/display-picture.jpeg'
const style = {
    teamupCardWrapper: `w-full h-full absolute`,
    wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
    space: `flex justify-between h-3/4 items-end mb-6`,
    name: `flex text-white text-3xl front-extrabold items-center`,
    age: `ml-4 font-semibold text-xl`,
    walletAddress: `font-bolder text-xl text-white mb-2`,
    reactionsContainer: `flex justify-between w-full px-2 gap-5`,
    buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer`,
    buttonSymbol: `text-3xl`,
    backColors: `border-white text-white`,
    xColors: `border-red-500 txt-red-500`,
    starColors: `border-blue-400 text-blue-400`,
    lightningColors: `border-purple-500 text-purple-500`,
}
const teamupCardItem = () => {
    const onSwipe = dir => {
        if (dir === 'right'){
            //handleRightSwipe(card, currentAccount)
        }
    }
    return (
        <TinderCard 
        className={style.teamupCardWrapper}
        preventSwipe = {['up', 'down']}
        onSwipe = {onSwipe}
        >
            <div className={style.wrapper} style= {{backgroundImage: `url("https://images.unsplash.com/photo-1545073255-7d382c4e78ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")`}}>
                <div className={style.space}>
                    <div className={style.name}>
                        Sarthak
                        <span className={style.age}>23</span>
                    </div>
                </div>
                <div className={style.walletAddress}>
                    0x1k...2e3
                </div>
                <div className={style.reactionsContainer}>
                    <div className={`${style.backColors} ${style.buttonContainer}`}>
                        <FaUndoAlt
                            className={`${style.backColors} ${style.buttonSymbol}`}
                            onClick={()=>goBack()}
                        />
                    </div>
                    <div className={`${style.xColors} ${style.buttonContainer}`}>
                        <AiOutlineClose
                            className={`${style.xColors} ${style.buttonSymbol}`}
                        />
                    </div>
                    <div className={`${style.starColors} ${style.buttonContainer}`}>
                        <AiFillStar
                            className={`${style.starColors} ${style.buttonSymbol}`}
                        />
                    </div>
                    <div className={`${style.lightningColors} ${style.buttonContainer}`}>
                        <BsFillLightningChargeFill
                            className={`${style.lightningColors} ${style.buttonSymbol}`}
                        />
                    </div>
                </div>
            </div>
        </TinderCard>
    )
}
export default teamupCardItem
