import mongoose from "mongoose";
import Post from "../models/post_model";

const getAllPosts = async (req, res, next) => {
  try {
    console.log("getAllPosts");
    let posts = {};
    if (req.query.sender == null) {
      posts = await Post.find();
    } else {
      posts = await Post.find({ sender: req.query.sender });
    }
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send({ error: "fail to get posts from db" });
  }
};

const getPostById = async (req, res, next) => {
  console.log("getPostById : " + req.params.id);
  if ((req.params.id == null) || (req.params.id == undefined)) {
    res.status(400).send({
      status: "fail",
      message: res.err.message,
    });
  }
  try {
    const posts = await Post.findById(req.params.id);
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: res.err.message,
    });
  }
};

const addNewPost = async (req, res, next) => {
  console.log("addNewPost");
  console.log(req.body);
  const post = new Post({
    message: req.body.message,
    sender: req.body.sender,
  });

  try {
    const newPost = await post.save();
    console.log("save post in db");
    res.status(200).send(newPost);
  } catch (err) {
    console.log("fail to save post in db");
    res.status(400).send({ error: "fail adding new post to db" });
  }
};

const updatePostById = async (req, res, next) => {
  console.log("updatePostById");
  console.log(req.body);
  if ((req.params.id == null) || (req.params.id == undefined)) {
    res.status(400).send({
      status: "fail",
      message: res.err.message,
    });
  }
  try {
    const updatePost = await Post.findOneAndUpdate(req.params.id, req.body);
    console.log("update post in db");
    const newPost = await Post.findById(updatePost._id);
    res.status(200).send(newPost);
  } catch (error) {
    res.status(400).send({ error: "fail update post in db" });
  }
};

export = { getAllPosts, getPostById, addNewPost, updatePostById };
