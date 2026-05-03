
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(50)
);

CREATE TABLE tracker_models (
  id SERIAL PRIMARY KEY,
  model_name VARCHAR(255)
);

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  imei VARCHAR(255) UNIQUE,
  model_id INTEGER REFERENCES tracker_models(id),
  status VARCHAR(50) DEFAULT 'available'
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255),
  phone VARCHAR(255),
  vehicle_number VARCHAR(255),
  imei VARCHAR(255),
  sold_by INTEGER REFERENCES users(id),
  sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
