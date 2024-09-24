# Run commands in terminal to get started

- npm i
- npm run dev
- npx prisma generate
- npx prisma migrate dev
- npx prisma db push

# Add temp products in your db
- INSERT INTO products (id, name, description, price, images, category, brand, "createdAt", "updatedAt", rating)
VALUES
('clt4c4n8d000000000000001', 'Wireless Mouse', 'Ergonomic wireless mouse with adjustable DPI', 29.99, '{"mouse1.jpg", "mouse2.jpg"}', 'Electronics', 'Logitech', NOW(), NOW(), 4.5),
('clt4c4n8d000000000000002', 'Bluetooth Headphones', 'Noise-cancelling over-ear headphones', 89.99, '{"headphones1.jpg", "headphones2.jpg"}', 'Electronics', 'Sony', NOW(), NOW(), 4.8),
('clt4c4n8d000000000000003', 'Gaming Keyboard', 'Mechanical keyboard with RGB backlighting', 119.99, '{"keyboard1.jpg", "keyboard2.jpg"}', 'Electronics', 'Corsair', NOW(), NOW(), 4.7),
('clt4c4n8d000000000000004', 'Smartphone Case', 'Durable case for iPhone 13', 15.99, '{"case1.jpg", "case2.jpg"}', 'Accessories', 'Spigen', NOW(), NOW(), 4.3),
('clt4c4n8d000000000000005', 'Laptop Stand', 'Adjustable laptop stand with cooling pad', 39.99, '{"stand1.jpg", "stand2.jpg"}', 'Furniture', 'Nexstand', NOW(), NOW(), 4.6),
('clt4c4n8d000000000000006', '4K Monitor', '27-inch 4K monitor with IPS panel', 299.99, '{"monitor1.jpg", "monitor2.jpg"}', 'Electronics', 'Dell', NOW(), NOW(), 4.9),
('clt4c4n8d000000000000007', 'Portable Charger', '10000mAh portable power bank', 25.99, '{"charger1.jpg", "charger2.jpg"}', 'Electronics', 'Anker', NOW(), NOW(), 4.4),
('clt4c4n8d000000000000008', 'Smartwatch', 'Fitness smartwatch with heart rate monitor', 179.99, '{"smartwatch1.jpg", "smartwatch2.jpg"}', 'Electronics', 'Fitbit', NOW(), NOW(), 4.6),
('clt4c4n8d000000000000009', 'Action Camera', 'Waterproof action camera with 4K video', 149.99, '{"camera1.jpg", "camera2.jpg"}', 'Electronics', 'GoPro', NOW(), NOW(), 4.8),
('clt4c4n8d000000000000010', 'Wireless Charger', 'Qi-compatible wireless charging pad', 19.99, '{"charger1.jpg", "charger2.jpg"}', 'Accessories', 'Samsung', NOW(), NOW(), 4.5),
('clt4c4n8d000000000000011', 'USB-C Hub', 'Multi-port USB-C hub with HDMI and Ethernet', 34.99, '{"hub1.jpg", "hub2.jpg"}', 'Electronics', 'HyperDrive', NOW(), NOW(), 4.4),
('clt4c4n8d000000000000012', 'Desk Lamp', 'LED desk lamp with adjustable brightness', 29.99, '{"lamp1.jpg", "lamp2.jpg"}', 'Furniture', 'Philips', NOW(), NOW(), 4.2),
('clt4c4n8d000000000000013', 'Gaming Chair', 'Ergonomic gaming chair with lumbar support', 219.99, '{"chair1.jpg", "chair2.jpg"}', 'Furniture', 'Secretlab', NOW(), NOW(), 4.7),
('clt4c4n8d000000000000014', 'Keyboard Tray', 'Adjustable keyboard tray with mouse pad', 39.99, '{"tray1.jpg", "tray2.jpg"}', 'Furniture', 'Kensington', NOW(), NOW(), 4.3),
('clt4c4n8d000000000000015', 'E-Book Reader', '6-inch e-book reader with front light', 119.99, '{"reader1.jpg", "reader2.jpg"}', 'Electronics', 'Kindle', NOW(), NOW(), 4.6),
('clt4c4n8d000000000000016', 'Fitness Tracker', 'Water-resistant fitness tracker with sleep monitoring', 99.99, '{"tracker1.jpg", "tracker2.jpg"}', 'Electronics', 'Garmin', NOW(), NOW(), 4.5),
('clt4c4n8d000000000000017', 'Laptop Backpack', 'Water-resistant backpack with padded laptop compartment', 89.99, '{"backpack1.jpg", "backpack2.jpg"}', 'Accessories', 'Targus', NOW(), NOW(), 4.4),
('clt4c4n8d000000000000018', 'Mouse Pad', 'Extended mouse pad with built-in wireless charger', 29.99, '{"mousepad1.jpg", "mousepad2.jpg"}', 'Accessories', 'Razer', NOW(), NOW(), 4.3),
('clt4c4n8d000000000000019', 'Surge Protector', 'Surge protector with USB charging ports', 24.99, '{"protector1.jpg", "protector2.jpg"}', 'Electronics', 'Belkin', NOW(), NOW(), 4.5),
('clt4c4n8d000000000000020', 'External Hard Drive', '1TB external hard drive with USB 3.0', 79.99, '{"harddrive1.jpg", "harddrive2.jpg"}', 'Electronics', 'Western Digital', NOW(), NOW(), 4.7);
