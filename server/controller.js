const houses = require('./db.json')
let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const tgtIndex = houses.findIndex(function (houseObj) {
            return houseObj.id === +req.params.houseId
        })

        houses.splice(tgtIndex, 1)

        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body
        const newHouse = {
            id, address, price, imageURL
        }

        houses.push(newHouse)
        id++

        res.status(200).send(houses)

    },

    updateHouse: (req, res) => {
        let { houseId } = req.params
        let { type } = req.body
        let index = houses.findIndex(function (houseObj) {
            return houseObj.id === +houseId
        })

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Error')
        }
    }
}