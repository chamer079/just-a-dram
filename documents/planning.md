# Planning Stages

## Steps / Trello
[To-Do list for this project](https://trello.com/invite/b/66f97293f297b0b34af303ea/ATTI2dbcc61c0b554e80401e6c18071b294439BAFDCD/just-a-dram)

## ERD
Whisky Schema:
```js
const whiskySchema = new mongoose.Schema({
    whiskyImg: { type: String, requierd: true },
    name: { type: String, required: true },
    distillery: { type: String, required: true },
    typeOfWhisky: { type: String, required: true },
    origin: { type: String, required: true },
    age: { type: String, required: true },
    proof: { type: Number, required: true },
    abv: { type: String, required: true },
    hue: { type: String, required: true },
    flavor: { type: String, required: true },
    reviews: [ reviewSchema ],
})
```

Review Schema:
```js
const reviewSchema = new mongoose.Schema({
    review: { type: String, required: true },
    user: { type: String, required: true },
})
```