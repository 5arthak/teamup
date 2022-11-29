import { useState, createContext, useEffect } from 'react'
import {faker} from '@faker-js/faker'
import { useMoralis } from 'react-moralis'

export const TeamUpContext = createContext()
export const TeamUpProvider = ({children}) => {
    const { authenticate,isAuthenticated, user, Moralis } = useMoralis()
    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        checkWalletConnection()
        if(isAuthenticated){
            requestUserData(user.get('ethAddress'))
            requestCurrentUserData(user.get('ethAddress'))
        }
    }, [isAuthenticated])
    const checkWalletConnection = async() => {
        if(isAuthenticated){
            const address = user.get('ethAddress')
            setCurrentAccount(address)
            requestToCreateUserProfile(address, faker.name.findName())
        }
    }
    const connectWallet = async() => {
        if (!isAuthenticated){
            try{
                await authenticate({
                    signingMessage: 'Log in:',
                })
            } catch (error){
                console.error(error)
            }
        }
    }
    const disconnectWallet = async() => {
        await Moralis.User.logOut()
        setCurrentAccount('')
    }
    return(
        <TeamUpContext.Provider
            value = {{
                connectWallet,
                disconnectWallet,
                currentAccount,
                currentUser,
            }}
        >{children}
        </TeamUpContext.Provider>
    )
}