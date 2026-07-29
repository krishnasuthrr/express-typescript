export interface Pet {
    id: number;
    name: string;
    species: string;
    breed: string;
    adopted: boolean;
    age: number;
    intakeDate: Date;
    adoptionDate?: Date;
    medicalRecord: MedicalRecord;
    photo: string
}

interface MedicalRecord {
    vaccinations: string[];
    weightKg: number;
    microchipId?: (null | string)
} 

export const pets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    species: "Cat",
    breed: "Bombay",
    age: 2,
    adopted: true,
    intakeDate: new Date("2026-01-01"),
    adoptionDate: new Date("2026-06-05"),
    medicalRecord: {
      vaccinations: ["rabies", "catvirus"],
      weightKg: 2.3,
      microchipId: null,
    },
    photo: "luna.jpg",
  },
  {
    id: 2,
    name: "Tuffy",
    species: "Dog",
    breed: "Pug",
    age: 3,
    adopted: false,
    intakeDate: new Date("2026-01-15"),
    medicalRecord: {
      vaccinations: ["rabies", "dogvirus"],
      weightKg: 4,
      microchipId: "ABC123",
    },
    photo: "tuffy.jpg",
  },
];