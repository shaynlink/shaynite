/**
 * @url https://codepen.io/shaynlink/pen/poqowmE
 */

const { PI, sqrt, abs, max, exp, cos, cosh } = Math;

export default class SecondOrderSystem {
    private _w: number;
    private _z: number;
    private _d: number;
    private k1: number;
    private k2: number;
    private k3: number;
    private xp: number;
    private y: number;
    private yd: number;

    constructor(f: number, z: number, r: number, x0: number) {
        // compute constants
        this._w = 2 * PI * f;
        this._z = z;
        this._d = this._w * sqrt(abs(z * z - 1));
        this.k1 = z / (PI * f);
        this.k2 = 1 / (this._w * this._w);
        this.k3 = r * z / this._w;
    
        // initialize variables
        this.xp = x0;
        this.y = x0;
        this.yd = 0;
    }

    public update(T: number, x: number, xd: number) {
        if (xd == null) { // estimate velocity
            xd = (x - this.xp) / T;
            this.xp = x;
        }
        
        let k1_stable, k2_stable;
        
        if (this._w * T < this._z) { // clamp k2 to guarantee stability without jitter
            k1_stable = this.k1;
            k2_stable = max(this.k2, T * T / 2 + T * this.k1 / 2, T * this.k1);
        } else { // use pole matching when the system is very fast
            const t1 = exp(-this._z * this._w * T);
            const alpha = 2 * t1 * (this._z <= 1 ? cos(T * this._d) : cosh(T * this._d));
            const beta = t1 * t1;
            const t2 = T / (1 + beta - alpha);
            k1_stable = (1 - beta) * t2;
            k2_stable = T * t2;
        }
        
        this.y = this.y + T * this.yd; // integrate position by velocity
        this.yd = this.yd + T * (x + this.k3 * xd - this.y - this.k1 * this.yd) / k2_stable; // integrate velocity by acceleration
        return this.y
    }

    public get value() {
        return this.y
    }
}