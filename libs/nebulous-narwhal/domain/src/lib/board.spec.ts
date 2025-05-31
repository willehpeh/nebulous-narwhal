import { Board } from './board';

describe('Board', () => {
  let board: Board;
  beforeEach(() => {
    board = new Board();
  });
  it('should create', () => {
    expect(board).toBeTruthy();
  });
});
