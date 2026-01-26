'use strict';

import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
    tournamentName: {
        type: String,
        required: [true, 'El nombre del torneo es requerido'],
        trim: true,
        maxLenght: [100, 'El nombre del torneo no puede tener mas de 100 caracteres'],
    },
    category: {
        type: String,
        required: [true, 'La categoría del torneo es requerida'],
        enum: {
            values: ['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'],
            message: 'Categoría de torneo no válida',
        },
    },
    startDate: {
        type: Date,
        required: [true, 'La fecha de inicio es requerida'],
    },
    endDate: {
        type: Date,
        required: [true, 'La fecha de finalización es requerida'],
    },
    maxTeams: {
        type: Number,
        required: [true, 'La cantidad máxima de equipos es requerida'],
        min: [2, 'El torneo debe tener al menos 2 equipos'],
    },
    registeredTeams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }],
    registrationFee: {
        type: Number,
        required: [true, 'La cuota de inscripción es requerida'],
        min: [0, 'La cuota debe ser mayor o igual a 0'],
    },
    status: {
        type: String,
        enum: {
            values: ['PLANIFICADO', 'EN_CURSO', 'FINALIZADO', 'CANCELADO'],
            message: 'Estado del torneo no válido',
        },
        default: 'PLANIFICADO',
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

// exportamos el modelo con el nombre Tournament
export default mongoose.model('Tournament', tournamentSchema);
