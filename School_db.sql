USE school_db;
GO

-- Table for Admission Forms
CREATE TABLE admissions (
  id INT IDENTITY(1,1) PRIMARY KEY, -- Use IDENTITY for auto-increment
  student_name VARCHAR(255) NOT NULL,
  parent_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  grade VARCHAR(10) NOT NULL,
  dob DATE NOT NULL,
  address TEXT NOT NULL,
  message TEXT,
  created_at DATETIME DEFAULT GETDATE() -- Use GETDATE() for current timestamp
);
GO

-- Table for Contact Forms
CREATE TABLE contacts (
  id INT IDENTITY(1,1) PRIMARY KEY, -- Use IDENTITY for auto-increment
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT GETDATE() -- Use GETDATE() for current timestamp
);
GO