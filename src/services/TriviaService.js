import axios from'axios';

const http = axios.create({
    baseURL: "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
});

export default {
    getTrivia() {
        return http.get();
    }
}