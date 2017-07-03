module.exports = (yardbird) => {
  const methods = {
    create: return createYardBird(params, yardbird),
    get: return getYardBird(id, yardbird),
    update: return updateYardBird(params, yardbird),
    delete: return deleteYardBird(params, yardbird)
  }
}

const createYardBird  =  (params, yardbird) => {
  yardbird(params).save((err, res) => {
    if (err) return Error(err)
    console.log(`Yard bird ${params.name} sucessfully created!`);
    return res
  })
}
