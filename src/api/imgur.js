import qs from 'qs';

const CLIENT_ID = '2c98b58199b5256';
const ROOT_URL = 'https://api.imgur.com/';

'oauth2/authorize?client_id=2c98b58199b5256&response_type=token&state=APPLICATION_STATE'

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}