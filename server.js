const express = require('express');
const app = express();

var compression = require('compression')
const helmet = require('helmet')
const path = require('path');
const session = require('express-session')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// const favicon = require('serve-favicon');

const rateLimit = require("express-rate-limit");
const requestIp = require('request-ip');
const bodyParser = require("body-parser");
const cors = require("cors");


const { authenticateToken, adminAuthenticateToken } = require("./auth/authentication")

require('dotenv').config()

//Socket io
// const http = require("http");
// const server = http.createServer(app);
// const socketIO = require("socket.io");
// const io = socketIO(server, {
//     transports:['polling'],
//     cors: '*'
// })

// io.on('connection', (socket) => {
//     // console.log(`${socket.id} user is connected`);
  
//     // socket.on('message', (message) => {
//     //   console.log(`message from ${socket.id} : ${message}`);
//     // })
  
//     // socket.on('disconnect', () => {
//     //   console.log(`socket ${socket.id} disconnected`);
//     // })
    
//     // console.log(`User Connected: ${socket.id}`);
  
//     socket.on("join_room", (data) => {
//       socket.join(data);
//     });
  
//     socket.on("send_message", (data) => {
//         socket.to(data.room).emit("receive_message", data);
//     });

//     //Realtime order status
//     socket.on("update_order_status", (data) => {
//         socket.to(data.room).emit("get_order_status", data);
//     });
// })
//end of socket io



app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

app.use(compression());
app.use(helmet());

app.use(function (req, res, next) {
    //disabling cache
    res.setHeader('Surrogate-Control', 'no-store')
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    next();
});

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 30, // limit each IP to 30 requests per windowMs
    statusCode: 500, //change this to 200 so the end user will get a custom msg saying server cant handle this much requests
    message: {
        "text": "limit exceeded"
    }
});
//  apply to all api requests
app.use('/api/v1', limiter);

app.use(session({
    secret: 'ASDew5rtfxcvfga',
    resave: false,
    saveUninitialized: true
}));

app.set('superSecret', process.env.SECRET);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //removing public folder form routes acessing
//app.use(express.static('/uploads/'));
/*app.use('/resources',express.static(__dirname + '/images'));*/
// ip request
app.use(requestIp.mw())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Welcome Route
app.get('/validate', authenticateToken, (req, res) => {
    // res.json(req.user)
    res.send({ "message": "Welcome to Real Estate Tokenization Engine...", "authenticate": true })
})

app.get('/superadmin/validate', adminAuthenticateToken, (req, res) => {
    // res.json(req.user)
    res.send({ "message": "Welcome to Real Estate Tokenizationg Engine...", "authenticate": true })
})

//Routes
const adminRoute = require('./routes/adminRoute');
const superadminRoute = require('./routes/superadminRoute');
const uploadRoute = require('./routes/uploadRoute');
const cuisinesRoute = require('./routes/cuisinesRoute');
const currencyRoute = require('./routes/currencyRoute');
const deliveryPeople = require('./routes/deliveryPeopleRoute');
const notice = require('./routes/noticeRoute');
const noticePushNotification = require('./routes/noticePushNotificationRoute');
const promocodes = require('./routes/promocodeRoute');
const reasons = require('./routes/reasonRoute');
const restaurantsType = require('./routes/restaurantsTypeRoute');
const settings = require('./routes/settingsRoute');
const addons = require('./routes/addonsRoute');
const category = require('./routes/categoryRoute');
const comboMenu = require('./routes/comboMenuRoute');
const restaurant = require('./routes/restaurantRoute');
const product = require('./routes/productRoute');
const qrCode = require('./routes/qrCodeRoute');
const card = require('./routes/cardRoute');
const promotion = require('./routes/promotionRoute');
const userRoute = require('./routes/userRoute');
const kitchenRoute = require('./routes/kitchenRoute');
const orders = require('./routes/orderRoute');
const favourite = require('./routes/favouriteRoute');
const addtocart = require('./routes/addtocartRoute');

//Payment
const paymentCardRoute = require('./routes/paymentCardRoute');
const stripeProductRoute = require('./routes/stripeProductRoute');
const paymentRoute = require('./routes/paymentRoute');

app.use('/payment_card', paymentCardRoute);
app.use('/stripe_product', stripeProductRoute);
app.use('/payment', paymentRoute);
//End of Payment

app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/superadmin', superadminRoute);
app.use('/cuisines', cuisinesRoute);
app.use('/currency', currencyRoute);
app.use('/deliveryPeople', deliveryPeople);
app.use('/notice', notice);
app.use('/noticePushNotification', noticePushNotification);
app.use('/promocodes', promocodes);
app.use('/reason', reasons);
app.use('/restaurantsType', restaurantsType);
app.use('/settings', settings);
app.use('/addons', addons);
app.use('/category', category);
app.use('/combomenu', comboMenu);
app.use('/restaurant', restaurant);
app.use('/product', product);
app.use('/qrcode', qrCode);
app.use('/card', card);
app.use('/promotion', promotion);
app.use('/kitchen', kitchenRoute);
app.use('/orders', orders);
app.use('/favourite', favourite);
app.use('/addtocart', addtocart);

// app.use(authenticateToken, uploadRoute);
app.use(uploadRoute);

app.get('/download/:filename', authenticateToken, (req, res) => {
    const { filename } = req.params;
    var file = __dirname + '/public/uploads/' + filename;
    console.log(file)
    res.download(file);
})

app.get('/getAvatar/:filename', (req, res) => {
    const { filename } = req.params;
    var file = __dirname + '/public/uploads/' + filename;
    console.log(file)
    res.download(file);
})


//Test mail
const testmail = require('./services/nodemailer/test_mail');
app.use(testmail);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        if (process.env.ENV == "production") {
            res.redirect('/500');
        } else {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    if (process.env.ENV == "production") {
        res.redirect('/500');
    } else {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    }
});


server.listen(5005, () => console.log(`Real Estate Tokenization engine on live on port ${5005}!`))

module.exports = app;

