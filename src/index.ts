import YKDiff from "./YKDiff";
import Result from "./Result";

const cli = require("cac")();
const version = "0.1.2";

cli
  .version(version)
  .command("<fileA> <fileB>", "Diff YAMLs")
  .action((fileA: string, fileB: string) => {
    const ykdiff: YKDiff = new YKDiff(fileA, fileB);
    const result: Result = ykdiff.getDiff();

    if (result.hasError()) {
      result.outputNotExistsA(fileA);
      result.outputNotExistsB(fileB);
      process.exit(1);
    }
  });

cli.help();
cli.parse();
