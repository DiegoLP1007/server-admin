'use strict';

import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: [true, 'El nombre del equipo es requerido'],
        trim: true,
        maxLenght: [100, 'El nombre del equipo no puede tener mas de 100 caracteres'],
    },
    captainName: {
        type: String,
        required: [true, 'El nombre del capitán es requerido'],
        trim: true,
        maxLenght: [100, 'El nombre del capitán no puede tener mas de 100 caracteres'],
    },
    contactEmail: {
        type: String,
        required: [true, 'El correo de contacto es requerido'],
        trim: true,
        lowercase: true,
    },
    contactPhone: {
        type: String,
        required: [true, 'El teléfono de contacto es requerido'],
        trim: true,
    },
    playersCount: {
        type: Number,
        required: [true, 'La cantidad de jugadores es requerida'],
        min: [1, 'El equipo debe tener al menos un jugador'],
        max: [30, 'El equipo no puede tener más de 30 jugadores'],
    },
    category: {
        type: String,
        required: [true, 'La categoría es requerida'],
        enum: {
            values: ['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'],
            message: 'Categoría de equipo no válida',
        },
    },
    description: {
        type: String,
        trim: true,
        maxLenght: [500, 'La descripción no puede exceder de 500 caracteres'],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

// exportamos el modelo con el nombre Team
export default mongoose.model('Team', teamSchema);
