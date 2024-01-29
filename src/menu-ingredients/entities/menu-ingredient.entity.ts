import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Menu } from '@/menus/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredientQuantity: number;

  @Column()
  ingredientQuantityType: string;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredientMenu, { onDelete: 'CASCADE' })
  ingredient: Ingredient;

  @ManyToOne(() => Menu, (menu) => menu.menuIngredient, { onDelete: 'CASCADE' })
  menu: Menu;
}