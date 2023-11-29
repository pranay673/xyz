import express from "express";


export const create = async(req, res)=>{
    try{
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "Book not found"});
        }

        const savedData = await userData.save();
        res.status(200).json({msg: "Book added"});



    } catch (error) {
        res.status(500).json({"error": error});

    }
}
export const getAll = async(req,res)=>{
    try{
        const bookExist = await User.find();
        if(!bookExist){
            return res.status(404).json({msg: "Book not found"});
        }
        res.status(200).json(bookExist);
    }
    catch(error){
        res.status(500).json({"error": error});
    }
}
export const getOne = async(req,res)=>{
    try{
        const id = req.params.id;
        const userData = await User.findById(id);
        if(!userData){
            return res.status(404).json({msg: "Book  not found"});
        }
        res.status(200).json(userData);

    }
    catch(error){
        res.status(500).json({"error": error});
    }
}

export const update = async (req,res)=>{
    try{
        const id = req.params.id;
        const userData = await User.findById(id);
        if(!userData){
            return res.status(404).json({msg: "Book  not found"});
        }
        const updatedData = await User.findByIdAndUpdate(id);
        res.status(200).json("Book updated");

    }
    catch(error){
        res.status(500).json({"error": error});
    }
}
export const deleteBook = async (req,res)=>{
    try{
        const id = req.params.id;
        const userData = await User.findById(id);
        if(!userData){
            return res.status(404).json({msg: "Book  not found"});
        }
        const updatedData = await User.findByIdAndDelete(id);
        res.status(200).json("Book deleted");

    }
    catch(error){
        res.status(500).json({"error": error});
    }
}
