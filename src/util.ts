export type Block = Array<string | Block>

export function indentBlock(blk: string[]): string[] {
    return blk.filter((x) => x).map((x) => "    " + x);
}

export function writeBlock(blk: Block): string[] {
    const res: string[] = [];
    for (const x of blk) {
        if (typeof x === "string") {
            res.push(x);
            continue;
        }
        const sub = indentBlock(writeBlock(x));
        res.push(...sub);
    }
    return res;
}

export function unescapeSeqs(s: string): string {
    let out = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== "\\") {
            out += s[i];
            continue;
        }
        if (s[i + 1] === "{" || s[i + 1] === "}" || s[i + 1] === "\\") {
            out += s[i + 1];
        } else {
            throw new Error(`Unknown escape code \\${s[i + 1]}`);
        }
        ++i;
    }
    return out;
}
