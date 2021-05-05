
const breakpoints = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
      media = {
        ...breakpoints,
        up: {},
        down: {},
        only: {},
        breakpoints: [],
      };

media.breakpoints = Object.keys(breakpoints)
  .map((key) => { return { key, width: breakpoints[key] } })
  .sort((a, b) => a.width > b.width);

media.breakpoints.forEach((bp, i) => {
  const prev = media.breakpoints[i - 1] || false,
        next = media.breakpoints[i + 1] || false;
  media.up[bp.key] = !!prev ? `only screen and (min-width: ${bp.width}px)` : 'only screen';
  media.down[bp.key] = !!next ? `only screen and (max-width: ${next.width - 0.2}px)` : 'only screen';
});




const theme = {

  site: {
    title: 'Global Cycling Network',
  },

  dim: {
    air: 32,
    rad: 16,
    lin: 2,
    block: 40,
  },

  font: {
    importUrl: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
    main: `'Open Sans', sans-serif`,
    heading: `'Open Sans', sans-serif`,
    size: 16,
    height: 20,
  },

  color: {
    black: '#0a0a0a',
    white: 'white',
    red: '#c30006',
    grayL1: '#e6e6e6',
  },

  dur: {
    fast: 0.35,
    med: 0.5,
    slow: 1,
  },

  media: { ...media },
}

theme.font.color = theme.color.black;
theme.color.text = theme.font.color;

export default theme
