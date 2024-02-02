module.exports = {
    devServer: {
        // 本地服务的端口号
        port: 3030,
        // 本地服务的响应头设置
        headers: {
            // 允许跨域
            "Access-Control-Allow-Origin": "*",
        },
    },

    style: {
        postcss: {
            plugins: [
                require("@tailwindcss/postcss7-compat"),
                require("autoprefixer"),
            ],
        },
    },
};
