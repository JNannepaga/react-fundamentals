module.exports = {
    verbose: true,
    setupFiles: ['<rootDir>/tests/jest.setup.js'],
    
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    collectCoverageFrom: [
        "src/Testing/*.js",
        "!src/index.js"
    ],
    coverageReporters: [
        "text", 
        "html"
    ]
}