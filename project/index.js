import {parser} from "@/utils/arg_parse"

console.log(parser().parseArgs())

// import Express from "express"
// const app = Express()

// app.get("/", (req, res) => {
//     const result = {
//         name: "hellflame"
//     }
//     res.json(result)
// })

// app.listen(3000, () => {
//     console.log("started")
// })
