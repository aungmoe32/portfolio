/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-cursor': {
                    "0%" : {
                        opacity: 0
                    },
                    "40%" : {
                        opacity: 0
                    },
                    "50%" :  {
                        opacity: 1
                    },
                    "90%" : {
                        opacity: 1
                    },
                    "100%" : {
                        opacity: 0
                    }
                },
            },
            animation: {
                'fade-cursor': "fade-cursor 1s  infinite",
            },
            colors: {
                primary: '#2E3842'
            },

            fontFamily: {
                'custom': ['Ubuntu Mono', 'monospace'],
            },

        },
    },
    plugins: [],
}