-- seeds.sql

-- Insert Users
INSERT INTO Users (name, email, profilePicture, bio) VALUES 
('John Doe', 'john@example.com', 'path/to/john.jpg', 'Bio of John Doe'),
('Jane Smith', 'jane@example.com', 'path/to/jane.jpg', 'Bio of Jane Smith'),
('Alice Johnson', 'alice@example.com', 'path/to/alice.jpg', 'Bio of Alice Johnson');

-- Insert Posts (Assuming users with IDs 1, 2, and 3 exist)
INSERT INTO Posts (userId, title, description, location, budget, requiredSkills, deadline) VALUES 
(1, 'Need a Web Developer', 'Looking for an experienced web developer to build a website.', 'New York', 5000.00, 'HTML, CSS, JavaScript', '2024-01-15'),
(2, 'Graphic Designer Needed', 'In need of a graphic designer for logo creation.', 'San Francisco', 1500.00, 'Photoshop, Illustrator', '2023-12-20');

-- Insert Applications (Assuming posts with IDs 1 and 2 exist)
INSERT INTO Applications (userId, postId, coverLetter, resume, status) VALUES 
(3, 1, 'I have 5 years of experience in web development.', 'path/to/resume1.pdf', 'pending'),
(1, 2, 'I am skilled in graphic design and have 3 years of experience.', 'path/to/resume2.pdf', 'pending');

-- Insert Comments (Assuming posts with IDs 1 and 2 exist)
INSERT INTO Comments (userId, postId, content) VALUES 
(2, 1, 'This sounds like an interesting project!'),
(3, 2, 'I would like to know more about this job.');

-- Insert Messages (Assuming users with IDs 1, 2, and 3 exist)
INSERT INTO Messages (senderId, receiverId, content) VALUES 
(1, 2, 'Hello, I saw your post about the web developer position.'),
(3, 1, 'Is the position still open? I am interested.'),
(2, 3, 'Yes, the position is still open. Feel free to apply.');
