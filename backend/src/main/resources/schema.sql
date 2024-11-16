DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS news CASCADE;
DROP TABLE IF EXISTS investments CASCADE;
DROP TABLE IF EXISTS portfolio CASCADE;
DROP TABLE IF EXISTS sector CASCADE;
DROP TABLE IF EXISTS sector_investments CASCADE;

create table if not exists users (
    id bigint generated by default as identity not null,
    name character varying not null,
    password character varying not null,
    email character varying null,
    location character varying null,
    risk smallint,
    returnRate smallint,
    duration smallint,
    constraint users_pkey primary key (id),
    constraint users_email_key unique (email)
) tablespace pg_default;

create table if not exists news (
    id bigint generated by default as identity not null,
    title character varying not null,
    description character varying not null,
    resume character varying not null
) tablespace pg_default;

create table if not exists investments (
    id bigint generated by default as identity not null,
    name character varying not null,
    constraint investments_pkey primary key (id)
  ) tablespace pg_default;

create table if not exists sector (
    id bigint generated by default as identity not null,
    name character varying not null,
    constraint sector_pkey primary key (id)
  ) tablespace pg_default;

create table if not exists sector_investments (
    id bigint generated by default as identity not null,
    id_sector bigint not null,
    id_investment bigint null,
    constraint sector_investments_pkey primary key (id),
    constraint sector_investments_id_investment_fkey foreign key (id_investment) references investments (id) on update cascade on delete cascade,
    constraint sector_investments_id_sector_fkey foreign key (id_sector) references sector (id) on update cascade on delete cascade
  ) tablespace pg_default;

  CREATE TABLE IF NOT EXISTS portfolio (
      id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
      id_user BIGINT NOT NULL,
      id_sector_investment BIGINT NOT NULL,
      CONSTRAINT portfolio_pkey PRIMARY KEY (id),
      CONSTRAINT portfolio_id_sector_investment_fkey FOREIGN KEY (id_sector_investment) REFERENCES sector_investments (id) ON UPDATE CASCADE ON DELETE CASCADE,
      CONSTRAINT portfolio_id_user_fkey FOREIGN KEY (id_user) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE
  ) TABLESPACE pg_default;
