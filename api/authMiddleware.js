// const jwt = require('jsonwebtoken');
// const User = require('./models/User');

// const authMiddleware = async (req, res, next) => {
//     try {
//         // Get the token from the request headers
//         const token = req.header('Authorization');

//         // Check if the token is present
//         if (!token) {
//             return res.status(401).json({ message: 'Authorization token not provided' });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key

//         // Check if the user exists
//         const user = await User.findById(decoded.userId);
//         if (!user) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         // Attach the user object to the request for future use
//         req.user = user;

//         // Continue to the next middleware or route handler
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// };

// module.exports = authMiddleware;


// authMiddleware.js

// const jwt = require('jsonwebtoken');
// const User = require('./models/User');

// const authMiddleware = async (req, res, next) => {
//     try {
//         // Get the token from the request headers
//         const token = req.header('Authorization');

//         // Check if the token is present
//         if (!token) {
//             return res.status(401).json({ message: 'Authorization token not provided' });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, 'your-secret-key');

//         // Check if the user exists
//         const user = await User.findById(decoded.userId);
//         if (!user) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         // Attach the user object to the request for future use
//         req.user = { ...decoded, role: user.role };

//         // Continue to the next middleware or route handler
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// };

// module.exports = authMiddleware;





const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Admin = require('./models/Admin');

const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from the request headers
        const token = req.header('Authorization');

        // Check if the token is present
        if (!token) {
            return res.status(401).json({ message: 'Authorization token not provided' });
        }

        // Verify the token
        const decoded = jwt.verify(token, 'your-secret-key');

        // Check if the user exists in both user and admin collections
        const user = await User.findById(decoded.userId);
        const admin = await Admin.findById(decoded.userId);

        if (!user && !admin) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Attach the user/admin object to the request for future use
        if (user) {
            req.user = { ...decoded, role: user.role };
        } else if (admin) {
            req.user = { ...decoded, role: 'admin' };
        }

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
