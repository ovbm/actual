import { v4 as uuidv4 } from 'uuid';

import * as constants from '../constants';
import { type Notification } from '../state-types/notifications';

import type { ActionResult } from './types';

export function addNotification(
  notification: Omit<Notification, 'id'> & { id?: string },
): ActionResult {
  return {
    type: constants.ADD_NOTIFICATION,
    notification: {
      ...notification,
      id: notification.id || uuidv4(),
    },
  };
}

export function addGenericErrorNotification(): ActionResult {
  return addNotification({
    type: 'error',
    message:
      'Something internally went wrong. You may want to restart the app if anything looks wrong. ' +
      'Please report this as a new issue on Github.',
  });
}

export function removeNotification(id: string): ActionResult {
  return {
    type: constants.REMOVE_NOTIFICATION,
    id,
  };
}
