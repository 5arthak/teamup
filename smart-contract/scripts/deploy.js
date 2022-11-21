const { ethers } = require ('hardhat')
const main = async () => {
    const teamupMaker = await ethers.getContractFactory('teamup')
    const teamupContract = await teamupMaker.deploy()
    console.log('Contract Address:', teamupContract.address)
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log('Contract Deployment Error', error)
        process.exit(1)
    })