const dataValid = (token, balance) => {
  if (token.length == 3 && balance.length !== 0) {
    return false;
  }

  return true;
}

export default dataValid;
