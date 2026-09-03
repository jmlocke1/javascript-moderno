import { Sequelize, DataTypes } from "sequelize";
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    titulo: DataTypes.STRING,
    precio: DataTypes.STRING,
    fecha_ida: DataTypes.DATE,
    fecha_vuelta: DataTypes.DATE,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    disponibles: DataTypes.INTEGER,
    slug: DataTypes.STRING
});