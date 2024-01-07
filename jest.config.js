module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'  // Dieser Ausdruck fängt Importe ab, die mit @/ beginnen, ersetzt '@/'-Pfade durch das entsprechende 'src'-Verzeichnis
  },
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)']
};
