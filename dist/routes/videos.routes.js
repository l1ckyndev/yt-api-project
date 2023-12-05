"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const videoRepository_1 = require("../modules/videos/repositories/videoRepository");
const login_1 = require("../middleware/login");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videoRepository = new videoRepository_1.VideoRepository();
videosRoutes.post('/create-video', login_1.login, (request, response) => {
    videoRepository.create(request, response);
});
videosRoutes.get('/get-videos', (request, response) => {
    videoRepository.getVideo(request, response);
});
videosRoutes.get('/search', (request, response) => {
    videoRepository.searchVideo(request, response);
});
