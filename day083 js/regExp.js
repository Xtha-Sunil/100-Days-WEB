// Define a regular expression pattern
const pattern = /hello/;

// Test the pattern against a string
const str = 'Hello, world!';
const result = pattern.test(str);
console.log(result); // Output: false

// Use the RegExp constructor to create a regular expression
const pattern2 = new RegExp('world');

// Test the pattern against a string
const str2 = 'Hello, world!';
const result2 = pattern2.test(str2);
console.log(result2); // Output: true

// Use regular expressions to replace text in a string
const str3 = 'Hello, world!';
const result3 = str3.replace(/world/, 'JavaScript');
console.log(result3); // Output: "Hello, JavaScript!"

// Use regular expressions to match text in a string and extract information
const str4 = 'My email address is john@example.com';
const emailPattern = /([a-z0-9._-]+)@([a-z0-9.-]+\.[a-z]{2,})/i;
const matches = str4.match(emailPattern);
console.log(matches); // Output: ["john@example.com", "john", "example.com"]


/*
 /([a-z0-9._-]+)@([a-z0-9.-]+\.[a-z]{2,})/i
 Here's what each part of the pattern means:

/.../i: These are the delimiters that enclose the regular expression pattern. The i flag at the end makes the pattern case-insensitive.
([a-z0-9._-]+): This is the first capturing group, which matches the username part of the email address. It consists of the following elements:
[a-z0-9._-]: This is a character class that matches any lowercase letter, digit, period (.), underscore (_), or hyphen (-).
+: This quantifier means that the character class must match one or more times.
@: This matches the literal "@" symbol that separates the username and domain name parts of the email address.
([a-z0-9.-]+\.[a-z]{2,}): This is the second capturing group, which matches the domain name part of the email address. It consists of the following elements:
[a-z0-9.-]+: This is a character class that matches any lowercase letter, digit, period (.), hyphen (-), or underscore (_).
\.: This matches a literal period character (.), which separates domain name segments.
[a-z]{2,}: This matches any lowercase letter, repeated at least two times. This is used to match the top-level domain name (e.g. .com, .edu, etc.).
/i: This is the closing delimiter and the case-insensitive flag.
So, when this regular expression pattern is used with the match method on a string that contains an email address, it will return an array containing the entire matched email address string, followed by each of the captured groups (i.e. the username and domain name)

*/