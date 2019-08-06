declare class Result {
    private notExistsA;
    private notExistsB;
    constructor(notExistsA: string[], notExistsB: string[]);
    hasError(): boolean;
    private outputCommon;
    outputNotExistsA(filename: string | null): void;
    outputNotExistsB(filename: string | null): void;
}
export default Result;
