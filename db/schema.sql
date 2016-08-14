DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(200) UNIQUE,
  password_digest VARCHAR(200),
  phrase_log VARCHAR(200)
);


