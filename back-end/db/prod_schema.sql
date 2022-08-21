DROP TABLE IF EXISTS snack_a_log;
CREATE TABLE snacks(
    ID          SERIAL  PRIMARY KEY,
    NAME        TEXT    NOT NULL,
    FIBER       INT,
    PROTEIN     INT,
    ADDED_SUGAR INT,
    IS_HEALTHY  BOOLEAN,
    IMAGE       TEXT   
);