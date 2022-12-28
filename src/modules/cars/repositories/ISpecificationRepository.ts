import { Specification } from "../entities/Specification";
// DTO => Data transfer object
interface ISpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ISpecificationDTO): void;
}

export { ISpecificationsRepository, ISpecificationDTO };
