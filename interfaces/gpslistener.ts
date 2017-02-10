export interface GpsListener {
    time : number;
    location() : void;
} 

export interface LightListener {
    lightUnit();
}