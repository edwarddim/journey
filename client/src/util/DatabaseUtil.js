import axios from "axios";

const getOnlyEntries = async (journal_id) => {
    try {
        const results = await axios.get(`http://localhost:8000/api/journals/${journal_id}/entries`)
        return results.data
    } catch (error) {
        return error
    }
}

export default {
    getOnlyEntries
}