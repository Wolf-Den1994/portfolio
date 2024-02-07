import throwErrorMessage from './catch';

export const sendNetlifyForm = async (body: string) => {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    console.warn('Success!!!');
  } catch (err: unknown) {
    throwErrorMessage(err);
  }
};
