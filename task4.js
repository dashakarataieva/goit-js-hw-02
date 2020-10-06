function formatString(string, maxLength = 40) {
  // Write code under this line
  const threesome = "...";
  if (string.split("").length <= maxLength) {
    return string;
  } else if (string.split("").length > maxLength) {
    const stringCut = string.slice(0, maxLength) + threesome;
    return stringCut;
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// ("Curabitur ligula sapien, tincidunt non.");

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// ("Vestibulum facilisis, purus nec pulvinar...");

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// ("Vestibulum facilisis, purus ne...");
