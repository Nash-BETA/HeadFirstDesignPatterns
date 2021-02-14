
export class CeilingFan {
  static HIGH :number = 3;
  static MEDIUM :number= 2;
  static LOW :number = 1;
  static OFF :number = 0;
  public location: string;
  public speed:number;

  constructor(location:string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  high():void {
    this.speed = CeilingFan.HIGH;
    console.log(this.location + 'の天井ファンを最大速度にする');
  }

  medium():void {
    this.speed = CeilingFan.MEDIUM;
    console.log(this.location + 'の天井ファンを中間速度にする');
  }

  low():void {
    this.speed = CeilingFan.LOW;
    console.log(this.location + 'の天井ファンを低速にする');
  }

  off():void {
    this.speed = CeilingFan.OFF;
    console.log(this.location + 'の天井ファンをオフにする');
  }

  getSpeed():number {
    return this.speed;
  }
}
