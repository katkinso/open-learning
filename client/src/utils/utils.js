import Cookies from 'universal-cookie';
import moment from 'moment';

const checkCookie = () => {
    const cookies = new Cookies(); //TODO write cookie to file for security
    return cookies.get('connect.sid')
}

const utcDateToLocalTime = (utcDateTime) => {
    
    return moment(utcDateTime).local().format('YYYY MMM DD h:mm A');
}

const utcToLocal = (utcDateTime) => {

    return moment(utcDateTime).local().format('dddd, MMMM DD @ h:mmA');
}

export default { checkCookie, utcDateToLocalTime, utcToLocal }