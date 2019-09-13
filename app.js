var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true });
var findOrCreate = require('mongoose-findorcreate')
var Schema = mongoose.Schema;
var UserSchema = new Schema({ facebookId: Number, email: String, name: String, gender: String });
UserSchema.plugin(findOrCreate);
var User = mongoose.model('User', UserSchema);
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id).then((user) => {
    done(null, user);
  })
})

passport.use(new FacebookStrategy({
  clientID: '433125930638156',
  clientSecret: '8ad2adf207315b48fc53d051e0f1cea0',
  callbackURL: "http://localhost:8080/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email', 'gender']
},
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOrCreate({ facebookId: profile.id, email: profile.emails[0].value, name: profile.displayName, gender: profile.gender }, function (err, user) {
      console.log(user)
      // if(err)
      //     return done(err);
      // if(user)
          return done(err, user);
      // else {
      //     var newUser = new User();
      //     newUser.facebook.id = profile.id;
      //     newUser.facebook.token = accessToken;
      //     newUser.facebook.name = profile.displayName;
      //     newUser.facebook.email = profile.emails[0].value;
      //     newUser.facebook.picture = profile.photos[0].value;

      //     newUser.save(function(err){
      //         if(err)
      //             throw err;
      //         return done(null, newUser);
      //     })
      // }
    });
  }
));

app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'public_profile,email'}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/success');
});

app.get('/success', function (req, res) {
  res.json({ "success": false });
});

app.get('/login', function (req, res) {
  res.json({ "success": true });
});

app.get('/posts/:email/:pwd', function (req, res) {
  console.log(req.params.email, req.params.pwd)
  if ((req.params.email == "vignesh") && (req.params.pwd == "123")) {
    res.json({ "success": true });
  }
});

app.get('/', function (req, res) {
  res.json({ "success": false });
});

app.get('/privacy-policy', function (req, res) {
  res.json({ "success": false });
});

// app.listen(port, hostname, function() {
//     console.log('Example app listening on port... http://'+ hostname + ':' + port);
// });

app.listen(process.env.PORT || 8080);