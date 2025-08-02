// Copyright 2025, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author anhnt02hp
 */

import TModel from '../../../../joist/js/TModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import stem from '../../stem.js';

type SelfOptions = {
  //TODO add options that are specific to StemModel here
};

type StemModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class StemModel implements TModel {

  public constructor( providedOptions: StemModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

stem.register( 'StemModel', StemModel );