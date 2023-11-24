CREATE DATABASE IF NOT EXISTS Build_Link_Grillo;
USE Build_Link_Grillo;

-- User Table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    profilePicture VARCHAR(255),
    bio TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Post Table
CREATE TABLE Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    budget FLOAT,
    requiredSkills VARCHAR(255),
    deadline DATETIME,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

-- Application Table
CREATE TABLE Applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    postId INT,
    coverLetter TEXT,
    resume VARCHAR(255),
    status VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (postId) REFERENCES Posts(id)
);

-- Comment Table
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    postId INT,
    content TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (postId) REFERENCES Posts(id)
);

-- Message Table
CREATE TABLE Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    senderId INT,
    receiverId INT,
    content TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES Users(id),
    FOREIGN KEY (receiverId) REFERENCES Users(id)
);
