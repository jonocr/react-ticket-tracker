const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const header = req.headers["authorization"];
	if (typeof header !== "undefined") {
		const bearer = header.split(" ");
		const token = bearer[1];
		try {
			const decoded = jwt.verify(token, process.env.JWT_KEY);
			req.userData = decoded;
			req.token = token;
			next();
		} catch (error) {
			return res.status(401).json({
				message: "Auth failed",
			});
		}
	} else {
		//If header is undefined return Forbidden (403)
		res.sendStatus(403);
	}
};
