CREATE TABLE plants (
  id VARCHAR(255) PRIMARY KEY,
  common_name VARCHAR(255),
  type VARCHAR(255),
  scientific_name VARCHAR(255),
  isAnnual BOOLEAN, 
  fruiting TEXT
);

CREATE TABLE annual_details (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
  plant_id VARCHAR(255) REFERENCES plants(id),
  days_to_germ INTEGER,
  seed_depth INTEGER,
  seed_start_date DATE,
  soil_block BOOLEAN,
  weeks_to_transplant INTEGER,
  seed_start_date_outside DATE,
  favorite BOOLEAN,
  image VARCHAR(255),
  notes TEXT,
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  login VARCHAR(255),
  password VARCHAR(255),
  zone INTEGER,
  zip_code VARCHAR(255)
);

CREATE TABLE perennial_details (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
  plant_id VARCHAR(255) REFERENCES plants(id),
  bud_break_date DATE,
  first_bloom_date DATE,
  last_bloom_date DATE,
  first_day_fruiting DATE,
  last_day_fruiting DATE,
  pruning_details TEXT,
  image VARCHAR(255),
  notes TEXT,
);

CREATE TABLE observations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  plant_id VARCHAR(255) REFERENCES plants(id),
  observation_date DATE,
  image VARCHAR(255),
  notes TEXT,
);

//use trefle API