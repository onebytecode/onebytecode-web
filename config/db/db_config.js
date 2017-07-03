module.exports = () => {
  const ENV  =  process.env.NODE_ENV || 'dev'
  const db_config = {
    url: getUrl(ENV)
  }
  return db_config
}

const getUrl = (env) => {
  switch(env) {
    case 'dev': return "mongodb://localhost:27017/main_web_dev"
    case 'production': return "mongodb://localhost:27017/main_web_production"
    case 'test': return "mongodb://localhost:27017/main_web_test"

    default: return "mongodb://localhost:27017/main_web_dev"
  }
}
