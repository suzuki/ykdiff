class Result {
  private notExistsA: string[] = [];
  private notExistsB: string[] = [];

  constructor(notExistsA: string[], notExistsB: string[]) {
    this.notExistsA = notExistsA;
    this.notExistsB = notExistsB;
  }

  public hasError(): boolean {
    return this.notExistsA.length > 0 || this.notExistsB.length > 0;
  }

  // TODO: Split `output` to the other class/function.
  private outputCommon(filename: string | null, messages: string[]): void {
    if (messages.length < 1) {
      return;
    }

    if (filename) {
      console.error(
        "----------------------------------------------------------------------"
      );
      console.error("File: " + filename);
      console.error(
        "----------------------------------------------------------------------"
      );
    }

    messages.forEach(msg => {
      console.error(msg);
    });
  }

  public outputNotExistsA(filename: string | null): void {
    this.outputCommon(filename, this.notExistsA);
  }

  public outputNotExistsB(filename: string | null): void {
    this.outputCommon(filename, this.notExistsB);
  }
}

export default Result;
