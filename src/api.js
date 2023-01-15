import React from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: `https://kachigosasdf.pythonanywhere.com/api/v1/`,
})

export default api;