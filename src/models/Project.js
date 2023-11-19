import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        demoLink: {
            type: String,
            required: true,
        },
        codeLink: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    },
    {
        timestamp: true,
    }
)


const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
