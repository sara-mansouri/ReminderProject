const passport = require('passport')
const LocalStrategy = require('passport-local')

passport.use(
  new LocalStrategy({
    callbackURL: '/auth/redirect'
  }), () => {
    console.log('passport callback fired')
  }
)
