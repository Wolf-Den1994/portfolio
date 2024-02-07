const throwErrorMessage = (err: unknown) => {
  if (typeof err === 'string') {
    console.error(err.toUpperCase());
  } else if (err instanceof Error) {
    console.error(err.message);
  }
};

export default throwErrorMessage;
