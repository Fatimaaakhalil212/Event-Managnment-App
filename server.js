// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2/promise");

// const app = express();

// // Allow requests from frontend running on any port
// app.use(cors({ 
//   origin: true, // Allow all origins for testing
//   credentials: true
// }));
// app.use(express.json()); // parse JSON bodies

// // Log all incoming requests
// app.use((req, res, next) => {
//   console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
//   next();
// });

// // MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "CUII@123456",
//   database: process.env.DB_NAME || "eventdb",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// // --- API ENDPOINTS ---

// // Health check
// app.get("/", (req, res) => {
//   res.send("Event Management API is running 🚀");
// });

// // Handle preflight OPTIONS requests
// app.options("/api/bookings", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });

// // ✅ Create a booking
// // server.js inside POST /api/bookings
// app.post("/api/bookings", async (req, res) => {
//   console.log("=== Received booking ===");
//   console.log("Headers:", req.headers);
//   console.log("Body:", req.body);
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);

//   const {
//     name,
//     phone_number,
//     email,
//     event_type,
//     event_date,
//     event_time,
//     guests_count,
//     venue_location,
//     decoration_style,
//     catering_option,
//     special_requests
//   } = req.body;

//   // Convert guests_count to integer if it's a range string
//   let processed_guests_count = guests_count;
//   if (typeof guests_count === 'string' && guests_count.includes('-')) {
//     // Extract the upper bound from ranges like "51-100"
//     const upperBound = guests_count.split('-')[1];
//     processed_guests_count = parseInt(upperBound) || 0;
//   } else {
//     processed_guests_count = parseInt(guests_count) || 0;
//   }

//   // Convert event_time from string to proper time format
//   let processed_event_time = event_time;
//   if (typeof event_time === 'string') {
//     switch (event_time) {
//       case 'morning':
//         processed_event_time = '09:00:00';
//         break;
//       case 'afternoon':
//         processed_event_time = '14:00:00';
//         break;
//       case 'evening':
//         processed_event_time = '18:00:00';
//         break;
//       case 'full-day':
//         processed_event_time = '09:00:00';
//         break;
//       default:
//         // If it's already in time format, keep it
//         processed_event_time = event_time;
//     }
//   }

//   try {
//     const [result] = await pool.query(
//       `INSERT INTO bookings 
//       (name, phone_number, email, event_type, event_date, event_time, guests_count, venue_location, decoration_style, catering_option, special_requests) 
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         name,
//         phone_number,
//         email,
//         event_type,
//         event_date,
//         processed_event_time,
//         processed_guests_count,
//         venue_location,
//         decoration_style,
//         catering_option,
//         special_requests
//       ]
//     );

//     res.json({ message: "Booking saved ✅", bookingId: result.insertId });
//   } catch (err) {
//     console.error("❌ Error inserting booking:", err);
//     res.status(500).json({ error: "Database insertion failed" });
//   }
// });


// // ✅ List all bookings
// // List all bookings
// app.get('/api/bookings', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
//     res.json(rows);
//   } catch (err) {
//     console.error("❌ Error fetching bookings:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Test endpoint
// app.get("/api/test", (req, res) => {
//   res.json({ message: "API is working ✅" });
// });

// // ✅ Create a feedback
// app.post("/api/feedback", async (req, res) => {
//   console.log("=== Received feedback ===");
//   console.log("Headers:", req.headers);
//   console.log("Body:", req.body);

//   const {
//     name,
//     email,
//     rating,
//     message,
//     event_type
//   } = req.body;

//   try {
//     const [result] = await pool.query(
//       `INSERT INTO feedback 
//       (name, email, rating, message, event_type) 
//       VALUES (?, ?, ?, ?, ?)`,
//       [name, email, rating, message, event_type]
//     );

//     res.json({ message: "Feedback saved ✅", feedbackId: result.insertId });
//   } catch (err) {
//     console.error("❌ Error inserting feedback:", err);
//     res.status(500).json({ error: "Database insertion failed" });
//   }
// });

// // ✅ List all feedback
// app.get('/api/feedback', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM feedback ORDER BY created_at DESC');
//     res.json(rows);
//   } catch (err) {
//     console.error("❌ Error fetching feedback:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Contact form endpoints
// app.options("/api/contact", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });

// app.post("/api/contact", async (req, res) => {
//   console.log("=== Received contact message ===");
//   console.log("Headers:", req.headers);
//   console.log("Body:", req.body);

//   const { name, email, phone, subject, message } = req.body;

//   try {
//     const [result] = await pool.query(
//       `INSERT INTO contact_messages (name, email, phone, subject, message) 
//       VALUES (?, ?, ?, ?, ?)`,
//       [name, email, phone, subject, message]
//     );
//     console.log("✅ Contact message saved with ID:", result.insertId);
//     res.json({ message: "Message sent successfully ✅", messageId: result.insertId });
//   } catch (err) {
//     console.error("❌ Error inserting contact message:", err);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// });

// app.get('/api/contact', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
//     res.json(rows);
//   } catch (err) {
//     console.error("❌ Error fetching contact messages:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`🚀 Server running on http://localhost:${port}`)
// );

const path = require("path"); 
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

// Middleware
app.use(cors({ 
    origin: true, 
    credentials: true
}));
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// MySQL Connection Pool (SECURITY FIX APPLIED)
const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    // ⚠️ CRITICAL FIX: Hardcoded password hata diya gaya hai.
    // EB par yeh value environment variable 'DB_PASSWORD' se aayegi.
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME || "eventdb",
    waitForConnections: true,
    connectionLimit: 10,
});

// --- API ENDPOINTS (Aapka Sara Backend Logic) ---

// Health check
app.get("/", (req, res) => {
    res.send("Event Management API is running 🚀");
});

// Handle preflight OPTIONS requests for bookings
app.options("/api/bookings", (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(200);
});

// ✅ Create a booking
app.post("/api/bookings", async (req, res) => {
    // ... (Aapka booking POST logic) ...
    const {
        name, phone_number, email, event_type, event_date, event_time, guests_count, 
        venue_location, decoration_style, catering_option, special_requests
    } = req.body;

    let processed_guests_count = guests_count;
    if (typeof guests_count === 'string' && guests_count.includes('-')) {
        const upperBound = guests_count.split('-')[1];
        processed_guests_count = parseInt(upperBound) || 0;
    } else {
        processed_guests_count = parseInt(guests_count) || 0;
    }

    let processed_event_time = event_time;
    if (typeof event_time === 'string') {
        switch (event_time) {
            case 'morning': processed_event_time = '09:00:00'; break;
            case 'afternoon': processed_event_time = '14:00:00'; break;
            case 'evening': processed_event_time = '18:00:00'; break;
            case 'full-day': processed_event_time = '09:00:00'; break;
            default: processed_event_time = event_time;
        }
    }

    try {
        const [result] = await pool.query(
            `INSERT INTO bookings 
            (name, phone_number, email, event_type, event_date, event_time, guests_count, venue_location, decoration_style, catering_option, special_requests) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, phone_number, email, event_type, event_date, processed_event_time, processed_guests_count, venue_location, decoration_style, catering_option, special_requests]
        );
        res.json({ message: "Booking saved ✅", bookingId: result.insertId });
    } catch (err) {
        console.error("❌ Error inserting booking:", err);
        res.status(500).json({ error: "Database insertion failed" });
    }
});

// ✅ List all bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching bookings:", err);
        res.status(500).json({ error: err.message });
    }
});

// Test endpoint
app.get("/api/test", (req, res) => {
    res.json({ message: "API is working ✅" });
});

// ✅ Create a feedback
app.post("/api/feedback", async (req, res) => {
    const { name, email, rating, message, event_type } = req.body;
    try {
        const [result] = await pool.query(
            `INSERT INTO feedback (name, email, rating, message, event_type) VALUES (?, ?, ?, ?, ?)`,
            [name, email, rating, message, event_type]
        );
        res.json({ message: "Feedback saved ✅", feedbackId: result.insertId });
    } catch (err) {
        console.error("❌ Error inserting feedback:", err);
        res.status(500).json({ error: "Database insertion failed" });
    }
});

// ✅ List all feedback
app.get('/api/feedback', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM feedback ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching feedback:", err);
        res.status(500).json({ error: err.message });
    }
});

// Contact form options
app.options("/api/contact", (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(200);
});

// ✅ Save contact message
app.post("/api/contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    try {
        const [result] = await pool.query(
            `INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`,
            [name, email, phone, subject, message]
        );
        res.json({ message: "Message sent successfully ✅", messageId: result.insertId });
    } catch (err) {
        console.error("❌ Error inserting contact message:", err);
        res.status(500).json({ error: "Failed to send message" });
    }
});

// ✅ List contact messages
app.get('/api/contact', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching contact messages:", err);
        res.status(500).json({ error: err.message });
    }
});


// --- SERVING FRONTEND (React) ---
// Note: This must be placed AFTER all API endpoints.

// 1. Serve static assets from the 'dist' folder (Correct path when server.js is in root)
app.use(express.static(path.join(__dirname, 'dist'))); 

// 2. Catch-all handler: For any non-API route, serve the React application (index.html)
app.get('*', (req, res) => {
    // Only serve index.html if the request is NOT for an API endpoint
    if (!req.url.startsWith('/api/')) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
        // If it's an API route that missed the handlers above, it's a 404
        res.status(404).send('Not Found');
    }
});


// --- START SERVER ---

// EB will automatically set the PORT environment variable.
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`🚀 Server running on http://localhost:${port}`)
);