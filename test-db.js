require("dotenv").config();
const mysql = require("mysql2/promise");

async function testDatabase() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "CUII@123456",
    database: process.env.DB_NAME || "eventdb",
    waitForConnections: true,
    connectionLimit: 10,
  });

  try {
    console.log("🔍 Testing database connection...");
    
    // Test connection
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully!");
    
    // Check if contact_messages table exists
    const [tables] = await connection.query("SHOW TABLES LIKE 'contact_messages'");
    console.log("📋 Tables found:", tables);
    
    if (tables.length === 0) {
      console.log("🔧 Creating contact_messages table...");
      await connection.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(150) NOT NULL,
          phone VARCHAR(20),
          subject VARCHAR(200),
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log("✅ contact_messages table created!");
    } else {
      console.log("✅ contact_messages table already exists!");
    }
    
    // Test insert
    console.log("🧪 Testing insert...");
    const [result] = await connection.query(
      `INSERT INTO contact_messages (name, email, phone, subject, message) 
      VALUES (?, ?, ?, ?, ?)`,
      ["Test User", "test@example.com", "1234567890", "Test Subject", "Test Message"]
    );
    console.log("✅ Test insert successful! ID:", result.insertId);
    
    // Clean up test data
    await connection.query("DELETE FROM contact_messages WHERE id = ?", [result.insertId]);
    console.log("🧹 Test data cleaned up!");
    
    connection.release();
    console.log("🎉 Database test completed successfully!");
    
  } catch (err) {
    console.error("❌ Database error:", err);
  } finally {
    await pool.end();
  }
}

testDatabase();
