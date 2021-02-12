module.exports = {
  displayName: "riipen-ui",
  name: "riipen-ui",
  roots: ["<rootDir>/packages/riipen-ui"],
  setupFilesAfterEnv: ["<rootDir>/packages/riipen-ui/test/setup.js"],
  testRegex: "/*.test.jsx$",
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
   global: {
   branches: 0,
   functions: 0,
   lines: 0,
   statements: 0
   }
  },
  moduleDirectories: ["node_modules", "src"]
};
