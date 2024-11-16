-- Insert data into users (if not already populated)
INSERT INTO users (name, password, email, location, risk, returnrate, duration) VALUES
('Alice', 'password123', 'alice@example.com', 'New York', 3, 7, 5),
('Bob', 'password456', 'bob@example.com', 'California', 2, 6, 10);

-- Insert data into investments (if not already populated)
INSERT INTO investments (name) VALUES
('Real Estate'),
('Stocks'),
('Bonds');

-- Insert data into sector (if not already populated)
INSERT INTO sector (name) VALUES
('Technology'),
('Healthcare');

-- Insert data into sector_investments (if not already populated)
INSERT INTO sector_investments (id_sector, id_investment) VALUES
(1, 1), -- Technology -> Real Estate
(1, 2), -- Technology -> Stocks
(2, 3); -- Healthcare -> Bonds

-- Insert data into portfolio
INSERT INTO portfolio (id_user, id_sector_investment) VALUES
(1, 1), -- Alice -> Technology -> Real Estate
(1, 2), -- Alice -> Technology -> Stocks
(2, 3); -- Bob -> Healthcare -> Bonds
