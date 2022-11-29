import React from 'react'
import CardHeader from './CardHeader'
import TeamupCardItem from './teamupCardItem'
const style = {
    wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
    cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
    noMoreWrapper: `flex flex-col justify-center items-center absolute`,
    teamupLogo: `text-5xl text-red-500 mb-4`,
    noMoreText: `text-xl text-white mt-10`,
    swipesContainer: `w-full h-full overflow-hidden`,
}
const Card = () => {
    return (
        <div className={style.wrapper}>
            < CardHeader />
            <div className={style.cardMain}>
                <div className={style.noMoreWrapper}>
                    <div className={style.noMoreText}>
                        No one available profiles.
                    </div>
                </div>
                < div className={style.swipesContainer}>
                    {/* {cardsData.map((card, index) => (
                        <teamupCardItem card={card} key={index}/>
                    ))} */}
                    <TeamupCardItem/>
                </div>
            </div>
            {/* <CardFooter/> */}
        </div>
    )
}
export default Card