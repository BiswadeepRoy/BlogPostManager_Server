import { checkServerPort, addNewBlog, getAllBlogs, getBlogById } from '../controllers/bpmController'

const routes = (app, port) => {
    app.route('/').get(checkServerPort(port))

    app.route('/blog')
        .post(addNewBlog)
        .get(getAllBlogs)

    app.route('/blog/:blogId')
        .get(getBlogById)

}

export default routes;
