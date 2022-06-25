import User from '../model/user.model'
import jwt from 'jsonwebtoken'
import properties from '../config/properties';

//register

export const register = async (req, res) => {
    const {name, apellido, email, password, telefono} = req.body;
    
    const user = await User.findOne({email: req.body.email})
    if(user) return res.status(400),json({message: 'Correo no disponible'});

    const newUser = new User({name, apellido, email, password: await  User.encryptPassword(password), telefono})

    const userSave = await newUser.save();

    const token = jwt.sign({id: userSave._id}, properties.SECRET, {expiresIn: 86400}); // expira en 24horas
    
    res.status(201).json({
        message: "Usuario Creado con exito",
        UserSave: userSave,
        Token: token
    })
}