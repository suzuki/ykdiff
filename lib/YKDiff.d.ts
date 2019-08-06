import Result from "./Result";
declare class YKDiff {
    private filenameA;
    private filenameB;
    constructor(filenameA: string, filenameB: string);
    private getKeysSet;
    private createErrorMessages;
    getDiff(): Result;
}
export default YKDiff;
