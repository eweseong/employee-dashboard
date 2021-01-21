module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/**/*.d.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  exclude: ['build', 'coverage', 'node_modules'],
  modulePaths: ['<rootDir>/src/'],
  typeAcquisition: {
    include: ['jest'],
  },
};
