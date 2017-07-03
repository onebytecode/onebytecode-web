module.exports  =  (mongoose, autoIncrement) => {
  const { Schema }  =  mongoose
  const yardBirdSchema  =  new Schema({
    id: { type: Number, required: true },
    name: String,
    secondName: String,
    telegramId: Number,
    sessionId: Number,
    works: Array,
    connection: String
  })

  yardBirdSchema.plugin( autoIncrement, {
    model: 'yardBird',
    field: 'id',
    startAt: 1
  })
  const YardBird = mongoose.model('yardBird', yardBirdSchema)

  return YardBird
}
