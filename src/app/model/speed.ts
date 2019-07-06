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
    // TODO: This is stupid!!
    let footSpeedDistance = 0;
    let climbSpeedDistance = 0;
    let flySpeedDistance = 0;
    let swimSpeedDistance = 0;
    if (footSpeed) {
      footSpeedDistance = footSpeed.speedDistance;
    }
    if (climbSpeed) {
      climbSpeedDistance = climbSpeed.speedDistance;
    }
    if (flySpeed) {
      flySpeedDistance = flySpeed.speedDistance;
    }
    if (swimSpeed) {
      swimSpeedDistance = swimSpeed.speedDistance;
    }
    return new this(footSpeedDistance, climbSpeedDistance, flySpeedDistance, swimSpeedDistance);
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



