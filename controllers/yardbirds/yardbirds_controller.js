module.exports = (yardbird) => {
  const createYardBird  =  (params, callback) => {
    yardbird(params).save((err, res) => {
      return callback(err, res)
    })
  }
  const getYardBird  =  (params, callback) => {
    yardbird.findOne({ id: params.id }, (err, res) => {
      callback(err, res)
    })
  }

  const updateYardBird  =  (params, callback) => {
    yardbird.findOneAndUpdate( { id: params.id }, params, (err, res) => {
      callback(err,res)
    })
  }

  const deleteYardBird  =  (params, callback) => {
    yardbird.findOneAndRemove({ id: params.id }, (err, res) => {
      callback(err, res)
    })
  }
  const methods = {
    create:  createYardBird,
    get:     getYardBird,
    update:  updateYardBird,
    delete:  deleteYardBird
  }
  return methods
}
