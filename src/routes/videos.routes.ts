import { Router } from "express";
import { UserRepository } from "../modules/user/repository/userRepository";
import { VideoRepository } from "../modules/videos/repositories/videoRepository";
import { login } from '../middleware/login';


const videosRoutes = Router();
const videoRepository = new VideoRepository();

videosRoutes.post('/create-video', login, (request, response) => {
    videoRepository.create(request, response);
})

videosRoutes.get('/get-videos', (request, response) => {
    videoRepository.getVideo(request, response);
})

videosRoutes.get('/search', (request, response) => {
    videoRepository.searchVideo(request, response);
})

      


export { videosRoutes };