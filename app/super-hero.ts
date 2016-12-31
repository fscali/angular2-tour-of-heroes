import { Hero } from './hero'
export class SuperHero {
  constructor(
    public id: number,
    public name: string,
    public enemy: Hero,
    public friend: Hero,
    public power: string
  ) {  }
}
