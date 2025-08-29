const express = require("express")
const app = express();
const port = 8000;
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 's'
    })
});
app.post('/tshirt', (req, res) => {
    const { id } = req.body
    const { name } = req.body
    res.send({
        id: id,
        name: name
    })

})

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
})
