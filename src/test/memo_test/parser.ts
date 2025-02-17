/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* S   := expr=E0 _ $
*        .value = number { return this.expr.value; }
* E0  := a=E1 _ op='\+|-' b=E0
*       .value=number {
*           return this.op === "+"
*               ?  this.a.value + this.b.value
*               :  this.a.value - this.b.value;
*       }
*      | E1
* E1  := a=ATOM _ op='\*|\/' b=E1
*       .value=number {
*           return this.op === "*"
*               ?  this.a.value * this.b.value
*               :  this.a.value / this.b.value;
*       }
*       | ATOM
* ATOM := _ val=INT
*         .value=number { return this.val.value; }
*         | _ '\(' val=E0 _ '\)'
*         .value=number { return this.val.value; }
* INT  := val='[0-9]+'
*         .value=number { return parseInt(this.val); }
* _    := '\s*'
*/
type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    S = "S",
    E0_1 = "E0_1",
    E0_2 = "E0_2",
    E1_1 = "E1_1",
    E1_2 = "E1_2",
    ATOM_1 = "ATOM_1",
    ATOM_2 = "ATOM_2",
    INT = "INT",
    _ = "_",
    $EOF = "$EOF",
}
export class S {
    public kind: ASTKinds.S = ASTKinds.S;
    public expr: E0;
    public value: number;
    constructor(expr: E0){
        this.expr = expr;
        this.value = ((): number => {
        return this.expr.value;
        })();
    }
}
export type E0 = E0_1 | E0_2;
export class E0_1 {
    public kind: ASTKinds.E0_1 = ASTKinds.E0_1;
    public a: E1;
    public op: string;
    public b: E0;
    public value: number;
    constructor(a: E1, op: string, b: E0){
        this.a = a;
        this.op = op;
        this.b = b;
        this.value = ((): number => {
        return this.op === "+"
              ?  this.a.value + this.b.value
              :  this.a.value - this.b.value;
        })();
    }
}
export type E0_2 = E1;
export type E1 = E1_1 | E1_2;
export class E1_1 {
    public kind: ASTKinds.E1_1 = ASTKinds.E1_1;
    public a: ATOM;
    public op: string;
    public b: E1;
    public value: number;
    constructor(a: ATOM, op: string, b: E1){
        this.a = a;
        this.op = op;
        this.b = b;
        this.value = ((): number => {
        return this.op === "*"
              ?  this.a.value * this.b.value
              :  this.a.value / this.b.value;
        })();
    }
}
export type E1_2 = ATOM;
export type ATOM = ATOM_1 | ATOM_2;
export class ATOM_1 {
    public kind: ASTKinds.ATOM_1 = ASTKinds.ATOM_1;
    public val: INT;
    public value: number;
    constructor(val: INT){
        this.val = val;
        this.value = ((): number => {
        return this.val.value;
        })();
    }
}
export class ATOM_2 {
    public kind: ASTKinds.ATOM_2 = ASTKinds.ATOM_2;
    public val: E0;
    public value: number;
    constructor(val: E0){
        this.val = val;
        this.value = ((): number => {
        return this.val.value;
        })();
    }
}
export class INT {
    public kind: ASTKinds.INT = ASTKinds.INT;
    public val: string;
    public value: number;
    constructor(val: string){
        this.val = val;
        this.value = ((): number => {
        return parseInt(this.val);
        })();
    }
}
export type _ = string;
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    private memoSafe: boolean = true;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public clearMemos(): void {
        this.$scope$S$memo.clear();
        this.$scope$E0$memo.clear();
        this.$scope$E1$memo.clear();
        this.$scope$ATOM$memo.clear();
        this.$scope$INT$memo.clear();
        this.$scope$_$memo.clear();
    }
    protected $scope$S$memo: Map<number, [Nullable<S>, PosInfo]> = new Map();
    protected $scope$E0$memo: Map<number, [Nullable<E0>, PosInfo]> = new Map();
    protected $scope$E1$memo: Map<number, [Nullable<E1>, PosInfo]> = new Map();
    protected $scope$ATOM$memo: Map<number, [Nullable<ATOM>, PosInfo]> = new Map();
    protected $scope$INT$memo: Map<number, [Nullable<INT>, PosInfo]> = new Map();
    protected $scope$_$memo: Map<number, [Nullable<_>, PosInfo]> = new Map();
    public matchS($$dpth: number, $$cr?: ErrorTracker): Nullable<S> {
        return this.memoise(
            () => {
                return this.run<S>($$dpth,
                    () => {
                        let $scope$expr: Nullable<E0>;
                        let $$res: Nullable<S> = null;
                        if (true
                            && ($scope$expr = this.matchE0($$dpth + 1, $$cr)) !== null
                            && this.match_($$dpth + 1, $$cr) !== null
                            && this.match$EOF($$cr) !== null
                        ) {
                            $$res = new S($scope$expr);
                        }
                        return $$res;
                    });
            },
            this.$scope$S$memo,
        );
    }
    public matchE0($$dpth: number, $$cr?: ErrorTracker): Nullable<E0> {
        return this.memoise(
            () => {
                return this.choice<E0>([
                    () => this.matchE0_1($$dpth + 1, $$cr),
                    () => this.matchE0_2($$dpth + 1, $$cr),
                ]);
            },
            this.$scope$E0$memo,
        );
    }
    public matchE0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<E0_1> {
        return this.run<E0_1>($$dpth,
            () => {
                let $scope$a: Nullable<E1>;
                let $scope$op: Nullable<string>;
                let $scope$b: Nullable<E0>;
                let $$res: Nullable<E0_1> = null;
                if (true
                    && ($scope$a = this.matchE1($$dpth + 1, $$cr)) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$op = this.regexAccept(String.raw`(?:\+|-)`, $$dpth + 1, $$cr)) !== null
                    && ($scope$b = this.matchE0($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new E0_1($scope$a, $scope$op, $scope$b);
                }
                return $$res;
            });
    }
    public matchE0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<E0_2> {
        return this.matchE1($$dpth + 1, $$cr);
    }
    public matchE1($$dpth: number, $$cr?: ErrorTracker): Nullable<E1> {
        return this.memoise(
            () => {
                return this.choice<E1>([
                    () => this.matchE1_1($$dpth + 1, $$cr),
                    () => this.matchE1_2($$dpth + 1, $$cr),
                ]);
            },
            this.$scope$E1$memo,
        );
    }
    public matchE1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<E1_1> {
        return this.run<E1_1>($$dpth,
            () => {
                let $scope$a: Nullable<ATOM>;
                let $scope$op: Nullable<string>;
                let $scope$b: Nullable<E1>;
                let $$res: Nullable<E1_1> = null;
                if (true
                    && ($scope$a = this.matchATOM($$dpth + 1, $$cr)) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$op = this.regexAccept(String.raw`(?:\*|\/)`, $$dpth + 1, $$cr)) !== null
                    && ($scope$b = this.matchE1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new E1_1($scope$a, $scope$op, $scope$b);
                }
                return $$res;
            });
    }
    public matchE1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<E1_2> {
        return this.matchATOM($$dpth + 1, $$cr);
    }
    public matchATOM($$dpth: number, $$cr?: ErrorTracker): Nullable<ATOM> {
        return this.memoise(
            () => {
                return this.choice<ATOM>([
                    () => this.matchATOM_1($$dpth + 1, $$cr),
                    () => this.matchATOM_2($$dpth + 1, $$cr),
                ]);
            },
            this.$scope$ATOM$memo,
        );
    }
    public matchATOM_1($$dpth: number, $$cr?: ErrorTracker): Nullable<ATOM_1> {
        return this.run<ATOM_1>($$dpth,
            () => {
                let $scope$val: Nullable<INT>;
                let $$res: Nullable<ATOM_1> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$val = this.matchINT($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = new ATOM_1($scope$val);
                }
                return $$res;
            });
    }
    public matchATOM_2($$dpth: number, $$cr?: ErrorTracker): Nullable<ATOM_2> {
        return this.run<ATOM_2>($$dpth,
            () => {
                let $scope$val: Nullable<E0>;
                let $$res: Nullable<ATOM_2> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\()`, $$dpth + 1, $$cr) !== null
                    && ($scope$val = this.matchE0($$dpth + 1, $$cr)) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\))`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = new ATOM_2($scope$val);
                }
                return $$res;
            });
    }
    public matchINT($$dpth: number, $$cr?: ErrorTracker): Nullable<INT> {
        return this.memoise(
            () => {
                return this.run<INT>($$dpth,
                    () => {
                        let $scope$val: Nullable<string>;
                        let $$res: Nullable<INT> = null;
                        if (true
                            && ($scope$val = this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr)) !== null
                        ) {
                            $$res = new INT($scope$val);
                        }
                        return $$res;
                    });
            },
            this.$scope$INT$memo,
        );
    }
    public match_($$dpth: number, $$cr?: ErrorTracker): Nullable<_> {
        return this.memoise(
            () => {
                return this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr);
            },
            this.$scope$_$memo,
        );
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchS(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchS(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchS(0, rec);
        const err = rec.getErr()
        return {ast: res, errs: err !== null ? [err] : []}
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private run<T>($$dpth: number, fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn()
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ErrorTracker): Nullable<string> {
        return this.run<string>(dpth,
            () => {
                const reg = new RegExp(match, "y");
                const mrk = this.mark();
                reg.lastIndex = mrk.overallPos;
                const res = this.tryConsume(reg);
                if(cr) {
                    cr.record(mrk, res, {
                        kind: "RegexMatch",
                        // We substring from 3 to len - 1 to strip off the
                        // non-capture group syntax added as a WebKit workaround
                        literal: match.substring(3, match.length - 1),
                        negated: this.negating,
                    });
                }
                return res;
            });
    }
    private tryConsume(reg: RegExp): Nullable<string> {
        const res = reg.exec(this.input);
        if (res) {
            let lineJmp = 0;
            let lind = -1;
            for (let i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    private memoise<K>(rule: $$RuleType<K>, memo: Map<number, [Nullable<K>, PosInfo]>): Nullable<K> {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if(this.memoSafe && $scope$memoRes !== undefined) {
        this.reset($scope$memoRes[1]);
        return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if(this.memoSafe)
        memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
    private match$EOF(et?: ErrorTracker): Nullable<{kind: ASTKinds.$EOF}> {
        const res: {kind: ASTKinds.$EOF} | null = this.finished() ? { kind: ASTKinds.$EOF } : null;
        if(et)
            et.record(this.mark(), res, { kind: "EOF", negated: this.negating });
        return res;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export interface ParseResult {
    ast: Nullable<S>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = { kind: "EOF"; negated: boolean };
export type MatchAttempt = RegexMatch | EOFMatch;
export class SyntaxErr {
    public pos: PosInfo;
    public expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ': ''}'${x.literal}'`)}`;
    }
}
class ErrorTracker {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private regexset: Set<string> = new Set();
    private pmatches: MatchAttempt[] = [];
    public record(pos: PosInfo, result: any, att: MatchAttempt) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear()
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if(att.kind === "RegexMatch") {
                if(!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            } else {
                this.pmatches.push(att);
            }
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}