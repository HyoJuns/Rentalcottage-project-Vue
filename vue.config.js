module.exports = {
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/Rentalcottage-project-Vue/"
            : "/",
    outputDir: "./docs"
};
