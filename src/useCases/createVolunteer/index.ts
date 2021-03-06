import MongoVolunteerRepository from '@repositories/implementations/mongodb/repository/MongoVolunteerRepository';
import CreateVolunteerUseCase from '@useCases/createVolunteer/CreateVolunteerUseCase';
import CreateVolunteerController from '@useCases/createVolunteer/CreateVolunteerController';

const mongoVolunteerRepository = new MongoVolunteerRepository();

const createVolunteerUseCase = new CreateVolunteerUseCase(mongoVolunteerRepository);

const createVolunteerController = new CreateVolunteerController(createVolunteerUseCase);

export { createVolunteerUseCase, createVolunteerController };
