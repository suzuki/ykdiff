import fs from "fs";
import yaml from "js-yaml";
import Result from "./Result";

class YKDiff {
  private filenameA: string;
  private filenameB: string;

  constructor(filenameA: string, filenameB: string) {
    this.filenameA = filenameA;
    this.filenameB = filenameB;
  }

  private getKeysSet(
    o: { [key: string]: any },
    parent: string | null = null
  ): Set<string> {
    let resultSet: Set<string> = new Set();

    const keys = Object.keys(o);
    keys.forEach(key => {
      if (typeof o[key] === "object") {
        const childSet = this.getKeysSet(o[key], key);
        resultSet = new Set([...resultSet, ...childSet]);
      } else {
        if (parent === null) {
          resultSet.add(key);
        } else {
          resultSet.add(parent + "." + key);
        }
      }
    });

    return resultSet;
  }

  private createErrorMessages(
    baseSet: Set<string>,
    targetSet: Set<string>
  ): string[] {
    const results: string[] = [];

    baseSet.forEach(key => {
      if (!targetSet.has(key)) {
        results.push(`"${key}" is only exist in this file.`);
      }
    });

    return results;
  }

  public getDiff(): Result {
    const fileA: Buffer = fs.readFileSync(this.filenameA);
    const fileB: Buffer = fs.readFileSync(this.filenameB);

    const docA = yaml.safeLoad(fileA.toString());
    const docB = yaml.safeLoad(fileB.toString());

    const keysSetA = this.getKeysSet(docA);
    const keysSetB = this.getKeysSet(docB);

    const notExistsA = this.createErrorMessages(keysSetA, keysSetB);
    const notExistsB = this.createErrorMessages(keysSetB, keysSetA);

    return new Result(notExistsA, notExistsB);
  }
}

export default YKDiff;
