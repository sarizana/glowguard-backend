const express = require("express");
const cors = require("cors");
const session = require("express-session"); 
const path = require("path");
require("dotenv").config();
require("./config/passport"); 
const passport = require("passport"); 
const authRoutes = require("./routes/authRoutes");
const skincareRoutes = require("./routes/skincareRoutes");

const app = express();

// ✅ CORS Configuration (Ensure frontend can interact with backend)
app.use(
    cors({
        origin: "http://localhost:3000", // Allow frontend requests
        credentials: true, // Allow cookies & authentication headers
    })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Add session middleware (Required for OAuth Login)
app.use(
    session({
        secret: process.env.JWT_SECRET, 
        resave: false,
        saveUninitialized: false,
    })
);

// ✅ Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/skincare", skincareRoutes);

// ✅ Serve Frontend (Only if in production)
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"), (err) => {
        if (err) {
            res.status(500).send("Frontend not found. Make sure to build it.");
        }
    });
});

// ✅ Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(🚀 Server running on port ${PORT}));