
export const authController = {
	login: (req, res) => {
		res.json({ mensaje: "Bienvenido al Login" });
	},
	register: (req, res) => {
		console.log(req.body);
		res.json({ mensaje: "Bienvenido al registro de usuario" });
	},
};
