import { Field, InputType, IntersectionType, ObjectType } from "@nestjs/graphql";
import { Board } from "../entities/board.entity";
import { BoardAllInput } from "./board-all.input";
import { BoardAllCount } from "./board-count.output";

@InputType()
export class BoardOutput extends IntersectionType(BoardAllInput, BoardAllCount ) {}