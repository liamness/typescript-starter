export const runApp = () => {
  document.body.style.cssText = Object.entries({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    margin: '0',
    'justify-content': 'center',
    'align-items': 'center',
    'font-size': '10vw',
    'font-family': 'sans-serif',
    'text-align': 'center',
    padding: '1em',
    'box-sizing': 'border-box',
  }).reduce(
    (styleAttribute, [property, value]) =>
      `${styleAttribute}${property}:${value};`,
    ''
  );

  document.body.textContent = 'wow much starter project';
};
