/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            letterSpacing: {
                xs: "0.0175rem", //0.28px
                ms: "0.0225rem", // 0.36px
                sm: "0.045rem", //0.72px
            },
            colors: {
                primary: "#0096C8",
                secondary: "#8064A2",
                cpGray: "#939CA3",
                cpGray2: "#CED4DA",
                cpGray3: "#EBEDF0",
                cpGray4: "#F7F5F9",
                cpGray5: "#6D747A",
                cpGray6: "#F8F9FA",
                cpBlack: "#08090A",
                cpBlue: "#F7FDFF",
                cpVoilet: "#CCC1DA",
                cpBlack: "#08090A",
            },
            lineHeight: {
                xs: "1.125rem", // 18px
                ms: "1.375rem", //14px
                sm: "1.875rem", // 30px
            },
            fontSize: {
                ms: "0.625rem", //10px
            },
            padding: {
                sm: "1.9375rem",
                15: "3.75rem",
                25: "6.25rem", //100px
                26: "6.625rem", //106px
            },
            margin: {
                lg: "1.875rem", // 30px
                25: "6.25rem", //100px
            },
            gap: {
                xs: "0.625rem", //10px
                sm: "0.9rem", // 14.4px
                ms: '3.625rem',// ms
                md: "4.4375rem", //71px
                21: "5.50rem", // 88px
            },
        },
    },
    plugins: [],
};
