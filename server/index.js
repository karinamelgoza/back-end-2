const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./controller')

const { getHouses, deleteHouse, createHouse, updateHouse } = ctrl

app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses)
app.post('/api/houses/', createHouse)
app.put('/api/houses/:houseId', updateHouse)
app.delete('/api/houses/:houseId', deleteHouse)

app.listen(4004, () => {
    console.log('server up on 4004')
})