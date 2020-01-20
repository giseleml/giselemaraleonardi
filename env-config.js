const prod = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
    'process.env.BACKEND_URL': prod ? '/giselemaraleonardi' : ''
  }

  
