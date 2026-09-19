import { Sequelize, DataTypes } from "sequelize";
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    mensaje: DataTypes.STRING
});