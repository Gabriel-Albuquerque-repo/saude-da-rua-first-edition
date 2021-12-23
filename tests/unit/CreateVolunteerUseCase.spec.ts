import MongoVolunteerRepository from '../../src/repositories/implementations/mongodb/repository/MongoVolunteerRepository';
import { OccupationOptions, FreeDaysOfWeek } from '../../src/entities/Volunteer';
import ICreateVolunteerRequestDTO from '../../src/useCases/createVolunteer/CreateVolunteerDTO';
import CreateVolunteerUseCase from '../../src/useCases/createVolunteer/CreateVolunteerUseCase';

describe('Create volunteer', () => {
  it('should be able to create a new volunteer', async () => {
    const volunteersRepository = new MongoVolunteerRepository();
    const createVolunteerUseCase = new CreateVolunteerUseCase(volunteersRepository);

    const volunteerData: ICreateVolunteerRequestDTO = {
      fullName: 'Lore Ipsum',
      email: 'jestTESTE@gmail.com',
      cellphoneNumberWithDDD: '(81) 99999-99999',
      occupation: OccupationOptions.MEDICO,
      expertise: 'Lore Ipsum',
      listFreeDaysOfWeek: [
        FreeDaysOfWeek.QUARTA,
        FreeDaysOfWeek.QUINTA,
      ],
      experienceWithHealthy: 'Lorem Ipsum',
      didParticipate: false,
      numberOfParticipation: 0,
      howDidKnowOfSDR: 'Lorem Ipsum',
    };

    const volunteer = await createVolunteerUseCase.execute(volunteerData);
  });
});