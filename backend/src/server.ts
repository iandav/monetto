import { app, port } from "./index"

app.listen(port, () => {
    console.log(`Monetto Backend listening on port ${port}`)
})