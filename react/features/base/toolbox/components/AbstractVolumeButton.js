// @flow

import AbstractButton from './AbstractButton';
import type { Props } from './AbstractButton';

/**
 * An abstract implementation of a button for disconnecting a conference.
 */
export default class AbstractVolumeButton<P : Props, S: *>
    extends AbstractButton<P, S> {

    iconName = 'volume-button';

    /**
     * Handles clicking / pressing the button, and disconnects the conference.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._doVolumeControl();
    }

    /**ton';

    /**
     * Handles clicking / pressing the button, and disconnects the conference.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._doVolumeControl();
      }

      /**
       * Helper function to perform the actual hangup action.
       *
       * @protected
       * @returns {void}
       */
    _doVolumeControl() {
        // To be implemented by subclass.
    }
}
