import throwErrorMessage from './catch';
import request from './fetch';

export const sendNetlifyForm = async (body: string): Promise<boolean> => {
  try {
    await request('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    return true;
  } catch (err: unknown) {
    throwErrorMessage(err);
    return false;
  }
};
