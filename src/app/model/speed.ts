import { SpeedType } from './enums';

export class Speed {

  constructor(
    public speedType: SpeedType,
    public speedDistance: number) {
  }

  static fromObject(speed: Speed): Speed {
    const { speedType, speedDistance } = speed;
    return new this(speedType, speedDistance);
  }
}

export class Speeds {
  public speeds: Speed[] = [];
  public primarySpeed: Speed;
  public footSpeed: Speed;
  public climbSpeed: Speed;
  public flySpeed: Speed;
  public swimSpeed: Speed;

  constructor(footSpeed: number, climbSpeed?: number, flySpeed?: number, swimSpeed?: number) {
    if (footSpeed && footSpeed > 0) {
      this.footSpeed = new Speed(SpeedType.Foot, footSpeed);
      this.speeds.push(this.footSpeed);
    }
    if (climbSpeed && climbSpeed > 0) {
      this.climbSpeed = new Speed(SpeedType.Climb, climbSpeed);
      this.speeds.push(this.climbSpeed);
    }
    if (flySpeed && flySpeed > 0) {
      this.flySpeed = new Speed(SpeedType.Fly, flySpeed);
      this.speeds.push(this.flySpeed);
    }
    if (swimSpeed && swimSpeed > 0) {
      this.swimSpeed = new Speed(SpeedType.Swim, swimSpeed);
      this.speeds.push(this.swimSpeed);
    }
    this.primarySpeed = this.getPrimarySpeed();
  }

  static fromObject(speed: Speeds): Speeds {
    const { footSpeed, climbSpeed, flySpeed, swimSpeed } = speed;
    return new this(footSpeed ? footSpeed.speedDistance : 0,
      climbSpeed ? climbSpeed.speedDistance : 0,
      flySpeed ? flySpeed.speedDistance : 0,
      swimSpeed ? swimSpeed.speedDistance : 0);
  }

  getPrimarySpeed() {
    let primarySpeed = this.speeds[0];
    if (this.footSpeed && this.footSpeed.speedDistance > primarySpeed.speedDistance) {
      primarySpeed = this.footSpeed;
    }
    if (this.climbSpeed && this.climbSpeed.speedDistance > primarySpeed.speedDistance) {
      primarySpeed = this.climbSpeed;
    }
    if (this.flySpeed && this.flySpeed.speedDistance > primarySpeed.speedDistance) {
      primarySpeed = this.flySpeed;
    }
    if (this.swimSpeed && this.swimSpeed.speedDistance > primarySpeed.speedDistance) {
      primarySpeed = this.swimSpeed;
    }
    return primarySpeed;
  }
}



