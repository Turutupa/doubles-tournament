import RoundRobin from '@roundrobin/RoundRobin';
import Brackets from '@brackets/Brackets';

export default class TournamentFactory {
  public static get RoundRobin() {
    return new RoundRobin();
  }

  public static get Brackets() {
    return new Brackets();
  }
}