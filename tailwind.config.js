const config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: "max-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0rem,15rem)"
      },
      borderWidth: {
        6: "6px"
      },
      colors: {
        violet: {
          25: '#fcfaff'
        },
      },
      keyframes: {
        slideDownAnFade:{
          from: {opacity: 0, transform: 'translateY(-2px)'},
          to: {opacity: 1, transform: 'translateY(0)'},
        },
        slideUpAnFade:{
          from: {opacity: 1},
          to: {opacity: 0},
        }
      },
      animation: {
        slideDownAnFade: 'slideDownAnFade 0.4s cubic-bezier(0.16,1,0.3,1)',
        slideUpAnFade: 'slideUpAnFade 1s linear'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
export default config
