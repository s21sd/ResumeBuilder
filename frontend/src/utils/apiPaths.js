export const BASE_URL = "https://resumebuilder-l023.onrender.com";

//utils/apiPath.js
export const API_PATHS = {

    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILE: "/api/auth/profile",
    },
    RESUME: {
        CREATE: "/api/resume",
        GET_ALL: "/api/resume",
        GET_BY_ID: (id) => `/api/resume/${id}`,
        UPDATE: (id) => `/api/resume/${id}`,
        DELETE: (id) => `/api/resume/${id}`,
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
        GET_PUBLIC: (id) => `/api/resume/public/${id}`,
    },
    image: {
        UPLOAD_IMAGE: "api/auth/upload-image",
    },
};