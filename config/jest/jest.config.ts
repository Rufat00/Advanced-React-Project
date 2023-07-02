export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    modulePaths: ["<rootDir>src"],
    moduleDirectories: ["node_modules"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>src/$1",
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg$": "<rootDir>__mocks__/svg.js",
    },
    testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
    rootDir: "../../",
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
};
