import axios from "axios"
const { default: SummaryApi } = require("../common")


const fetchCategoryWiseProduct = async (category) => {
    const response = await axios({
        url: SummaryApi.categoryWiseProduct.url,
        method: SummaryApi.categoryWiseProduct.method,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            category: category
        }
    });

    return response.data;
};


export default fetchCategoryWiseProduct