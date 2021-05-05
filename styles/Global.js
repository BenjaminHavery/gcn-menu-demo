
import theme from '../styles/theme'
const { font, dim, dim: { air, rad, lin } } = theme;


const GlobalStyles = () => <style global jsx>{`

html, body {
  font-family: ${font.main};
  font-size: ${font.size}px;
  line-height: ${font.height}px;
}

h1, h2, h3, h4, h5 {
  margin: ${air/4}px 0 ${air/2}px;
  font-family: ${font.heading};
  line-height: 1;
}
h1 {
  margin-top: 0;
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}

p, li { margin-bottom: ${dim.air/2}px }

li {
  position: relative;
  padding-left: ${air/2}px;
}
ul li:before {
  content: '';
  position: absolute;
  height: ${font.size/3}px;
  width: ${font.size/3}px;
  top: ${font.height/2 - font.size/6}px;
  left: 0;
  border-radius: 50%;
  color: inherit;
  background: ${font.color};
  background: currentColor;
}

*.tight.all { margin: 0 } *.tight.t { margin-top: 0 } *.tight.l { margin-left: 0 } *.tight.r { margin-right: 0 } *.tight.b { margin-bottom: 0 }

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar { display: none } /* Chrome, Safari and Opera */

`}</style>


export default GlobalStyles