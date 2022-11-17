CREATE TABLE IF NOT EXISTS public.admin
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    address VARCHAR(250),
    authority VARCHAR(200) NOT NULL,
    phone_no VARCHAR(15),
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    avatar VARCHAR(200),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.upload
(
    id SERIAL PRIMARY KEY,
    file VARCHAR(200) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.currency
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.delivery_people
(
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    address VARCHAR(50) NOT NULL,
    latitude FLOAT NOT NULL,
    longtitude FLOAT NOT NULL,
    deliver_avatar VARCHAR(50),
    country_code VARCHAR(10) NOT NULL,
    phone_no VARCHAR(15) NOT NULL,
    device_id VARCHAR(50),
    device_os VARCHAR(10),
    delivery_status VARCHAR(10) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.notice
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    device_id VARCHAR(100),
    device_os VARCHAR(10),
    title VARCHAR(50) NOT NULL,
    notice VARCHAR(100) NOT NULL,
    extra_note VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.notice_push_notification
(
    id SERIAL PRIMARY KEY,
    sent_to_type INTEGER NOT NULL,
    message VARCHAR(100) NOT NULL,
    push_type VARCHAR(50) NOT NULL,
    send_date VARCHAR(50) NOT NULL,
    send_time VARCHAR(50) NOT NULL,
    sent_status INTEGER NOT NULL,
    sent_on VARCHAR(50) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.cuisines
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cuisines_avatar VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.promocodes
(
    id SERIAL PRIMARY KEY,
    promocodes VARCHAR(50) NOT NULL,
    discount FLOAT NOT NULL,
    usagelimit_percoupon INTEGER NOT NULL,
    usagelimit_peruser INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    promocodetype VARCHAR(50) NOT NULL,
    avaiable_from VARCHAR(50),
    expired_date VARCHAR(50),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.reason
(
    id SERIAL PRIMARY KEY,
    reason VARCHAR(50) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);


CREATE TABLE IF NOT EXISTS public.restaurants_type
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    status VARCHAR(10) NOT NULL,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.settings
(
      id SERIAL PRIMARY KEY,
      site VARCHAR(50) NOT NULL,
      logo VARCHAR(50) NOT NULL,
      favicon VARCHAR(50) NOT NULL,
      copyright VARCHAR(50) NOT NULL,
      currency VARCHAR(50) NOT NULL,
      currencycode VARCHAR(50) NOT NULL,
      twilotoken VARCHAR(50) NOT NULL,
      twilionumber VARCHAR(50) NOT NULL,
      pub_pub_key VARCHAR(50) NOT NULL,
      pub_sub_key VARCHAR(50) NOT NULL,
      client_id VARCHAR(50) NOT NULL,
      client_secret VARCHAR(50) NOT NULL,
      default_language VARCHAR(50) NOT NULL,
      customer_username VARCHAR(50) NOT NULL,
      terms_user VARCHAR(50) NOT NULL,
      terms_restaurants VARCHAR(50) NOT NULL,
      default_location VARCHAR(50) NOT NULL,
      amount_referral VARCHAR(50) NOT NULL,
      payment VARCHAR(50) NOT NULL,
      stripe_charge VARCHAR(50) NOT NULL,
      stripe_publish_key VARCHAR(50) NOT NULL,
      stripe_secret VARCHAR(50) NOT NULL,
      stripe_url VARCHAR(50) NOT NULL,
      productOrder VARCHAR(50) NOT NULL,
      dispute_responsetime VARCHAR(50) NOT NULL,
      search_distance VARCHAR(50) NOT NULL,
      deliveryman_responsetime VARCHAR(50) NOT NULL,
      dish_commission VARCHAR(50) NOT NULL,
      delivery_fee VARCHAR(50) NOT NULL,
      orderlimit_min VARCHAR(50) NOT NULL,
      orderlimit_max VARCHAR(50) NOT NULL,
      order_assinged VARCHAR(50) NOT NULL,
      android_env VARCHAR(50) NOT NULL,
      android_pushkey VARCHAR(50) NOT NULL,
      ios_user_env VARCHAR(50) NOT NULL,
      ios_provider_env VARCHAR(50) NOT NULL,
      android_applink VARCHAR(50) NOT NULL,
      ios_applink VARCHAR(50) NOT NULL,
      iosprovider_pushpassword VARCHAR(50) NOT NULL,
      iosshop_env VARCHAR(50) NOT NULL,
      iosshop_pushpassword VARCHAR(50) NOT NULL,
      iosuser_pushpassword VARCHAR(50) NOT NULL,
      iosuser_topic VARCHAR(50) NOT NULL,
      iosuser_apppassword VARCHAR(50) NOT NULL,
      iosprovider_apptopic VARCHAR(50) NOT NULL,
      iosprovider_apppassword VARCHAR(50) NOT NULL,
      iosshop_apptopic VARCHAR(50) NOT NULL,
      iosshop_apppassword VARCHAR(50) NOT NULL,
      googlemap_key VARCHAR(50) NOT NULL,
      twilio_sid VARCHAR(50) NOT NULL,
      twilio_token VARCHAR(50) NOT NULL,
      twilio_number VARCHAR(50) NOT NULL,
      fb_client_id VARCHAR(50) NOT NULL,
      fb_client_secret VARCHAR(50) NOT NULL,
      fb_redirect VARCHAR(50) NOT NULL,
      google_client_id VARCHAR(50) NOT NULL,
      google_client_secret VARCHAR(50) NOT NULL,
      google_redirect VARCHAR(50) NOT NULL,
      facebook VARCHAR(50) NOT NULL,
      instagram VARCHAR(50) NOT NULL,
      pinterest VARCHAR(50) NOT NULL,
      vimeo VARCHAR(50) NOT NULL,
      youtube VARCHAR(50) NOT NULL,
      is_sociallogin VARCHAR(50) NOT NULL,
      is_deleted BOOLEAN DEFAULT false,
      created_at TIMESTAMP,
      updated_at TIMESTAMP 

);

CREATE TABLE IF NOT EXISTS public.addons
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    product_id INTEGER NOT NULL,
    price FLOAT NOT NULL,
    addons_avatar VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.category
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    restaurant_id INTEGER NOT NULL,
    description VARCHAR(50),
    category_avatar VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.restaurant
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    restaurant_avatar VARCHAR(50),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.product
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category_id INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
    description VARCHAR(50),
    food_type VARCHAR(50) NOT NULL,
    combo_menu_id INTEGER,
    is_availability BOOLEAN,
    price FLOAT NOT NULL,
    quantity INTEGER NOT NULL,
    is_addons BOOLEAN,
    offer INTEGER,
    product_avatar VARCHAR(50),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.combo_menu
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    discount FLOAT NOT NULL,
    max_quantity INTEGER NOT NULL,
    is_availability BOOLEAN,
    menu_avatar VARCHAR(50),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.qrcode
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    qr_avatar VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.card
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_name VARCHAR NOT NULL,
    quantity INTEGER NOT NULL,
    price FLOAT NOT NULL,
    note VARCHAR(50),
    card_draft BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS public.promotion
(
    id SERIAL PRIMARY KEY,
    promotion_name VARCHAR(50) NOT NULL,
    product_id INTEGER NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    discount FLOAT,
    quantity INTEGER,
    vaild_date VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    promotion_avater VARCHAR(100),
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);