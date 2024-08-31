function extendHex(shortHex) {
  // Remove the # prefix if it exists
  if (shortHex.startsWith("#")) {
    shortHex = shortHex.substring(1);
  }

  // Initialize an empty string to store the full hex code
  let fullHex = "#";

  // Loop through each character in the short hex code
  for (let i = 0; i < shortHex.length; i++) {
    // Repeat each character to get the full hex code
    fullHex += shortHex[i] + shortHex[i];
  }

  return fullHex;
}