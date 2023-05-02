import { Injectable } from '@nestjs/common';
import { Board, BoardsStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardsStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
