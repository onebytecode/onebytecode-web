module.exports = (yardbird, params) => {
  const methods = {
    create: return createYardBird,
    get: return getYardBird,
    update: return updateYardBird,
    delete: return deleteYardBird
  }
  return methods
}

const createYardBird  =  (params) => {
  yardbird(params).save((err, res) => {
    if (err) return Error(err)
    console.log(`Yard bird ${params.name} sucessfully created!`);
    return res
  })
}
