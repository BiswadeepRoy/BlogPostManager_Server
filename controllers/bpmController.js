import { BlogSchema } from '../models/bpmModel';
import mongoose from 'mongoose';

const Blog = mongoose.model('Blog', BlogSchema)

export const addNewBlog = (req, res) => {
    let newBlog = new Blog(req.body);

    newBlog.save().then(blog => {
        res.json(blog);
    }).catch(err => {
        res.send(err);
    });
};

export const getAllBlogs = (req, res) => {
    Blog.find({}).then(blogs => {
        res.json(blogs);
    }).catch(err => {
        res.send(err);
    });
};

export const getBlogById = (req, res) => {
    Blog.findById(req.params.blogId).
        then(blog => {
            res.json(blog);
        }).
        catch(err => {
            res.send(err);
        });
};

export const checkServerPort = (port) => {
    return (req, res) => {
        res.send(`BPM Server App is running on localhost with port ${port}`);
    };
}