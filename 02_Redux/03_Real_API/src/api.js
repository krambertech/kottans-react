import axios from 'axios';

const API_PREFIX = 'https://api.github.com';
const NUMBER_OF_PROFILES_TO_DISPLAY = 100;
const API_TOKEN = 'fdd83349eaddc6a102419f86dca3743fd1a542d7';

export function getPopularUsersByLanguage(language) {
    const params = {
        q: `language:${language}`,
        per_page: NUMBER_OF_PROFILES_TO_DISPLAY,
        access_token: API_TOKEN,
        sort: 'followers',
        order: 'desc'
    };

    return axios.get(`${API_PREFIX}/search/users`, { params });
}

export default {
    getPopularUsersByLanguage,
};
