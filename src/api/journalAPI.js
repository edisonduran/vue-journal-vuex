import axios from "axios";

const journalApi = axios.create({

    baseURL: 'https://vue-projects-2e02f-default-rtdb.firebaseio.com'
})

export default journalApi