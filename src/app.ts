export const runApp = () => {
  Object.assign(document.body.style, {
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
  });

  document.body.textContent = 'wow much starter project';
};
