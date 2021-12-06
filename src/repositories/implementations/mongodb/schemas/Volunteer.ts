import { Schema, model, Model } from 'mongoose';
import { IVolunteer, listEnumFreeDays, listEnumOccupation } from './IVolunteer';

// OBS.: Saber máximos e mínimos do tamanho de strings livres

const schema = new Schema<IVolunteer>({
  _id: {
    type: String,
  },

  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  cellphoneNumberWithDDD: {
    type: String,
    trim: true,
    required: true,
  },

  // OBS.: Provavelmente tirar o enum (pesquisar se pode funcionar assim)
  occupation: {
    type: String,
    required: true,
    enum: listEnumOccupation,
  },

  expertise: {
    type: String,
    trim: true,
    required: true,
  },

  listfreeDaysOfWeek: [
    {
      type: String,
      required: true,
      enum: listEnumFreeDays,
    },
  ],

  numberOfFreeDaysOfWeek: {
    type: Number,
    required: true,
    min: 1,
    max: 7,
  },

  experienceWithHealthy: {
    type: String,
    trim: true,
    required: true,
  },

  didParticipate: {
    type: Boolean,
    required: true,
  },

  numberOfParticipation: {
    type: Number,
    required: true,
    min: 0,
    max: 99,
  },

  howDidknowOfSDR: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

const VolunteerModel: Model<IVolunteer> = model<IVolunteer>('Volunteer', schema, 'volunteers');

// 'volunteers' é o nome da coleção
export default VolunteerModel;
