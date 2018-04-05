const initData = () => (
    fetch('http://192.168.1.1/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
