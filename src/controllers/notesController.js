const express = require('express');
const notesModel = require("../models/notes.model")

exports.createNotes = async (req, res) => {
    try {
        let { title, content } = req.body;
        if (!title || !content) {
            return res.status(404).send({
                message: "tittle and content are requried.."
            })
        }
        title = title.trim();
        content = content.trim();
        if (!title || !content) {
            return res.status(404).send({
                message: "title and content can not be empty"
            })
        }
        let note = await notesModel.create({ title, content });
        return res.status(201).json({
            succes: true,
            message: "notes create successfully",
            data: note
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to create note",
            message: error.message
        });
    }
}
exports.featchAllNotes = async (req, res) => {
    try {
        const tasks = await notesModel.find().sort({ updatedAt: -1 });
        return res.status(200).json({
            success: true,
            Message: "notes fetch successfully !",
            data: tasks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "failed to fetch notes",
            details: error.message
        })
    }
}
exports.getSingleByIdNotes = async (req, res) => {
    try {
        const noteId = req.params.id;
        const notedata = await notesModel.findById(noteId)
        if (!notedata) {
            return res.status(404).send({
                message: "note data not found !",
            })
        }
        return res.status(200).json({
            message: `successfully fetch this ${noteId} data`,
            data: notedata,
        });
    } catch (error) {
        return res.status(500).send({
            error: "failed to fetch notes",
            details: error.message
        })
    }
}
exports.updateNotes = async (req, res) => {
    try {
        const notesId = req.params.id;
        let { title, content } = req.body;
        if (title === undefined && content === undefined) {
            return res.status(400).json({
                success: false,
                message: "Provide at least title or content to update"
            });
        }
        const updateData = {}

        if (title !== undefined) {
            title = title.trim();
            if (!title) {
                return res.status(400).json({
                    success: false,
                    message: "title can not be empty"
                })
            }
            updateData.title = title
        }

        if (content !== undefined) {
            content = title.trim();
            if (!content) {
                return res.status(400).json({
                    success: false,
                    message: "content can not be empty"
                })
            }
            updateData.content = content
        }
        const updateNotes = await notesModel.findByIdAndUpdate(notesId, updateData, { new: true });
        if (!updateNotes) {
            return res.satatus(4040).json({
                success: false,
                message: "note not found"
            })
        }
        res.status(200).json(
            {
                success: true,
                message: "notes update successfuly",
                data: updateData
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "failed to fetch notes",
            details: error.message
        })
    }
}

exports.deleteNotes = async (req, res) => {
    try {
        const noteId = req.params.id;
        await notesModel.findByIdAndDelete(noteId)
        res.status(200).json({
            messege: "note delete succesfully !"
        })
    } catch (error) {
        res.status(500).send({
            error: "failed",
            details: error.message
        })
    }
}

exports.searchNotes = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query || !query.trim()) {
            return res.status(400).json({
                success: false,
                message: "search query is required"
            })
        }
        const cleanQuery = query.trim();
        const regex = new RegExp(cleanQuery, "i");
        const notes = await notesModel.find({
            $or: [
                { title: regex },
                { content: regex }
            ]
        }).sort({ updatedAt: -1 });
        res.status(200).json({
            success: true,
            message: "Search results",
            data: notes
        });

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "server error"
            }
        )
    }
}

