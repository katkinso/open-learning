import Cookies from 'universal-cookie';

const checkCookie = () => {
    const cookies = new Cookies(); //TODO write cookie to file for security
    return cookies.get('connect.sid')
}

export default { checkCookie }